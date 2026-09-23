/* ---------------------------------------------------------------------------
   Draws the app icons and the social preview card at build time, so they
   follow the accent colour in src/data/portfolio.js instead of being fixed
   images someone has to redraw by hand.

   Everything here is plain maths plus Node's built-in zlib — no image library.
--------------------------------------------------------------------------- */

import { deflateSync } from "node:zlib";

type RGB = [number, number, number];

export function hexToRgb(hex: string, fallback: RGB = [232, 84, 46]): RGB {
  const value = hex.trim().replace("#", "");
  const full = value.length === 3 ? value.split("").map((c) => c + c).join("") : value;
  if (!/^[0-9a-f]{6}$/i.test(full)) return fallback;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

/* --- PNG encoding -------------------------------------------------------- */

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Buffer): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Buffer): Buffer {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
}

/** Encode raw RGBA pixels as a PNG. */
export function encodePng(width: number, height: number, rgba: Uint8Array): Buffer {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8; // bit depth
  header[9] = 6; // colour type: RGBA
  // bytes 10-12 stay 0: deflate, adaptive filtering, no interlacing

  // Each scanline is prefixed with its filter type (0 = none).
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0;
    Buffer.from(rgba.buffer, rgba.byteOffset + y * stride, stride).copy(
      raw,
      y * (stride + 1) + 1,
    );
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* --- Signed distance fields ---------------------------------------------- */
// Negative inside the shape, positive outside. Turning the distance into
// coverage gives smooth edges without drawing at a larger size first.

function sdRoundedBox(px: number, py: number, half: number, radius: number): number {
  const qx = Math.abs(px) - half + radius;
  const qy = Math.abs(py) - half + radius;
  return (
    Math.min(Math.max(qx, qy), 0) +
    Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) -
    radius
  );
}

function sdSegment(px: number, py: number, ax: number, ay: number, bx: number, by: number): number {
  const pax = px - ax;
  const pay = py - ay;
  const bax = bx - ax;
  const bay = by - ay;
  const h = Math.max(0, Math.min(1, (pax * bax + pay * bay) / (bax * bax + bay * bay)));
  return Math.hypot(pax - bax * h, pay - bay * h);
}

/** Distance to the brand mark: three lines crossing at the centre. */
function sdAsterisk(px: number, py: number, reach: number, thickness: number): number {
  let d = Infinity;
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI) / 3 + Math.PI / 2;
    const dx = Math.cos(a) * reach;
    const dy = Math.sin(a) * reach;
    d = Math.min(d, sdSegment(px, py, -dx, -dy, dx, dy));
  }
  return d - thickness;
}

/** Distance turned into 0..1 coverage, giving roughly one pixel of softening. */
const coverage = (d: number) => Math.max(0, Math.min(1, 0.5 - d));

function blend(dst: Uint8Array, i: number, [r, g, b]: RGB, alpha: number) {
  if (alpha <= 0) return;
  const a = Math.min(1, alpha);
  dst[i] = Math.round(dst[i] * (1 - a) + r * a);
  dst[i + 1] = Math.round(dst[i + 1] * (1 - a) + g * a);
  dst[i + 2] = Math.round(dst[i + 2] * (1 - a) + b * a);
  dst[i + 3] = Math.round(Math.min(255, dst[i + 3] + 255 * a));
}

/* --- The icons ------------------------------------------------------------ */

/**
 * A rounded square in the accent colour with the white brand mark on it.
 * `maskable` fills the whole canvas and shrinks the mark, because Android
 * crops these to a circle.
 */
export function brandIcon(size: number, accent: RGB, maskable = false): Buffer {
  const px = new Uint8Array(size * size * 4);
  const c = size / 2;
  const reach = size * (maskable ? 0.155 : 0.23);
  const thickness = size * 0.036;
  const white: RGB = [255, 255, 255];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const dx = x + 0.5 - c;
      const dy = y + 0.5 - c;

      const bg = maskable ? 1 : coverage(sdRoundedBox(dx, dy, c, size * 0.22));
      if (bg <= 0) continue;
      blend(px, i, accent, bg);
      blend(px, i, white, coverage(sdAsterisk(dx, dy, reach, thickness)) * bg);
    }
  }

  return encodePng(size, size, px);
}

/** ICO wrapper holding several PNGs, which every current browser accepts. */
export function brandIco(accent: RGB, sizes = [16, 32, 48]): Buffer {
  const images = sizes.map((s) => brandIcon(s, accent));

  const dir = Buffer.alloc(6);
  dir.writeUInt16LE(0, 0); // reserved
  dir.writeUInt16LE(1, 2); // 1 = icon
  dir.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = images.map((img, n) => {
    const e = Buffer.alloc(16);
    e[0] = sizes[n] >= 256 ? 0 : sizes[n];
    e[1] = sizes[n] >= 256 ? 0 : sizes[n];
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32BE(0, 8);
    e.writeUInt32LE(img.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += img.length;
    return e;
  });

  return Buffer.concat([dir, ...entries, ...images]);
}

/**
 * 1200x630 card used for link previews. A full-bleed accent field with the
 * mark on it: bold at thumbnail size in a chat, and correct whatever accent
 * colour is chosen. Point site.ogImage at your own image to replace it.
 */
export function brandOgCard(accent: RGB): Buffer {
  const W = 1200;
  const H = 630;
  const px = new Uint8Array(W * H * 4);
  const white: RGB = [255, 255, 255];

  // Slightly deepened towards the bottom right so the field is not flat.
  const shade: RGB = [
    Math.round(accent[0] * 0.78),
    Math.round(accent[1] * 0.72),
    Math.round(accent[2] * 0.7),
  ];

  const cx = W * 0.38;
  const cy = H / 2;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      blend(px, i, accent, 1);

      const t = Math.hypot(x - W * 0.95, y - H * 1.05) / (W * 0.95);
      if (t < 1) blend(px, i, shade, (1 - t) ** 2 * 0.55);

      // The mark, and a ring echoing it.
      const dx = x + 0.5 - cx;
      const dy = y + 0.5 - cy;
      blend(px, i, white, coverage(sdAsterisk(dx, dy, 128, 20)));

      const ring = Math.abs(Math.hypot(dx, dy) - 208) - 1.5;
      blend(px, i, white, coverage(ring) * 0.35);
    }
  }

  return encodePng(W, H, px);
}
