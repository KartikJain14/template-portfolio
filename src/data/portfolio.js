/* ==========================================================================

   YOUR PORTFOLIO — THIS IS THE ONLY FILE YOU NEED TO EDIT.

   How to use it:
     1. Find the section you want to change (they are in big boxes like this).
     2. Change the text between the "quotes".
     3. Save the file. The website updates by itself.

   Three small rules that will save you a lot of pain:
     - Keep the quotes "like this" around every piece of text.
     - Keep the commas , at the end of each line.
     - If you want a double quote inside your text, write it as \"

   To hide a whole section: delete everything between its [ ] brackets,
   so it looks like  export const projects = [];  — the section disappears
   from the page and from the menu automatically.

   ========================================================================== */

/* ==========================================================================
   1. COLOURS
   Pick one accent colour. It is used for links, buttons and highlights.

   Some good ones to copy-paste:
     Coral   "#E8542E"      Forest  "#2F7A5B"      Indigo  "#4F5BD5"
     Plum    "#8B3A62"      Ocean   "#1D6F8C"      Gold    "#B8860B"
   ========================================================================== */

export const theme = {
  accent: "#E8542E",      // colour used in light mode
  accentDark: "#FF7A50",  // slightly brighter version for dark mode
};

/* ==========================================================================
   2. WHO YOU ARE
   This is the big text at the top of the page.
   Leave any line as ""  (empty) to hide it.
   ========================================================================== */

export const profile = {
  name: "Aarav Mehta",
  shortName: "Aarav",          // used in the menu and the footer

  // The one-line description under your name.
  role: "Computer Science Undergraduate",

  // Two or three lines about what you do. Keep it human.
  tagline:
    "I like building small, useful things for the web — and I am usually the person in the team who volunteers to fix the messy part.",

  // Your college details.
  course: "B.Tech, Computer Science & Engineering",
  college: "Sunrise Institute of Technology",
  campus: "Chennai Campus",
  batch: "2023 — 2027",
  location: "Chennai, India",

  // The small green pill at the top. Set to "" to hide it.
  status: "Open to internships",

  // YOUR PHOTO (optional).
  // Put your picture inside the "public" folder, then write "/my-photo.jpg"
  // Leave it as "" and a nice card with your initials is shown instead.
  photo: "",

  // YOUR RESUME (optional).
  // Put your PDF inside the "public" folder, then write "/resume.pdf"
  resume: "",
};

/* ==========================================================================
   3. ABOUT ME
   "paragraphs" — write as many paragraphs as you like, each in quotes.
   "facts"      — the small list shown next to your text.
   ========================================================================== */

export const about = {
  paragraphs: [
    "I am a second year CSE student who got into programming through a very ugly website I built for my school fest — it worked, people used it, and that was enough to get me hooked.",
    "Since then I have spent most of my free time building side projects, breaking them, and slowly learning how real software is put together. I care a lot about things that are simple to use and honest about what they do.",
    "Outside of code I run logistics for our tech fest, play badminton badly but enthusiastically, and read more non-fiction than I can finish.",
  ],

  // Small facts shown in a card. Add or remove lines freely.
  facts: [
    { label: "Course", value: "B.Tech CSE" },
    { label: "Year", value: "2nd Year" },
    { label: "Campus", value: "Chennai" },
    { label: "Focus", value: "Web & Backend" },
    { label: "Languages", value: "English, Hindi, Tamil" },
  ],
};

/* ==========================================================================
   4. WHAT YOU ARE LIKE
   Three or four qualities. The "title" words also scroll across the
   screen in the strip below your name, so keep them short.
   ========================================================================== */

export const qualities = [
  {
    title: "Curious",
    text: "I open the docs before I open Stack Overflow. Usually.",
  },
  {
    title: "Reliable",
    text: "If I say I will have it ready by Friday, it is ready by Friday.",
  },
  {
    title: "Collaborative",
    text: "Happiest in a team where everyone is allowed to disagree out loud.",
  },
  {
    title: "Detail-driven",
    text: "I will notice the misaligned button, and I will fix it.",
  },
];

/* ==========================================================================
   5. EXPERIENCE
   Clubs, committees, internships, volunteering — anything counts.
   Newest one goes at the top.

   "points" are the bullet points. Keep two or three, keep them specific.
   Set  current: true  to show a small "Now" badge.
   ========================================================================== */

export const experience = [
  {
    role: "Logistics Head",
    org: "Technovate — Annual Tech Fest",
    department: "Organising Committee",
    period: "2025 — Present",
    current: true,
    points: [
      "Lead a team of 12 volunteers across three days and nine events.",
      "Handle vendor coordination, venue booking and on-ground scheduling.",
      "Rebuilt the volunteer roster into a shared sheet, cutting no-shows by half.",
    ],
  },
  {
    role: "Core Member",
    org: "Google Developer Student Club",
    department: "Web Development Team",
    period: "2024 — Present",
    current: true,
    points: [
      "Conduct beginner sessions on HTML, CSS and Git for first-year students.",
      "Maintain the club website and the event registration flow.",
    ],
  },
  {
    role: "Design Volunteer",
    org: "Rotaract Club",
    department: "Media & Publicity",
    period: "2024",
    current: false,
    points: [
      "Designed posters and social posts for six community drives.",
      "Helped grow the club's Instagram reach from 400 to 2,100 accounts.",
    ],
  },
];

/* ==========================================================================
   6. ACHIEVEMENTS
   Hackathons, ranks, scholarships, certifications, competitions.
   ========================================================================== */

export const achievements = [
  {
    title: "1st Place — Inter-College Hackathon",
    detail:
      "Built a campus lost-and-found app in 24 hours with a team of four. Judged on usability and completeness.",
    year: "2025",
    tag: "Hackathon",
  },
  {
    title: "Dean's Merit List",
    detail: "Awarded for being in the top 5% of the department across two consecutive semesters.",
    year: "2024",
    tag: "Academics",
  },
  {
    title: "Finalist — National Coding Contest",
    detail: "Ranked 38th out of 2,400 participants in the final round.",
    year: "2024",
    tag: "Competition",
  },
  {
    title: "Google Cloud Certified — Associate",
    detail: "Completed the associate cloud engineer learning path and certification.",
    year: "2024",
    tag: "Certification",
  },
];

/* ==========================================================================
   7. PROJECTS
   Your best work first. Two good projects beat six half-finished ones.

   "link"  — the live website  (leave "" if there is none)
   "code"  — the GitHub repo   (leave "" if there is none)
   "image" — optional picture. Put it in the "public" folder and
             write "/project-one.jpg". Leave "" for a clean fallback.
   ========================================================================== */

export const projects = [
  {
    title: "Campus Lost & Found",
    blurb:
      "A small web app where students post what they lost or found on campus, with photo uploads and a claim flow. Built in 24 hours, still used by our department.",
    tags: ["React", "Firebase", "Tailwind"],
    year: "2025",
    link: "",
    code: "https://github.com/",
    image: "",
  },
  {
    title: "Attendance Buddy",
    blurb:
      "Tells you exactly how many classes you can skip before your attendance drops below 75%. Deliberately does one thing only.",
    tags: ["JavaScript", "Local Storage"],
    year: "2025",
    link: "",
    code: "https://github.com/",
    image: "",
  },
  {
    title: "Fest Registration Portal",
    blurb:
      "The registration and check-in system for our tech fest. Handled 1,200 sign-ups and QR-based entry without falling over.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    year: "2024",
    link: "",
    code: "https://github.com/",
    image: "",
  },
];

/* ==========================================================================
   8. SKILLS
   Group them however makes sense for you. Be honest — you will be
   asked about everything on this list in an interview.
   ========================================================================== */

export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "Java", "SQL"] },
  { group: "Frontend", items: ["HTML", "CSS", "React", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { group: "Tools", items: ["Git", "Figma", "Postman", "Linux"] },
];

/* ==========================================================================
   9. HOW PEOPLE REACH YOU
   The email is used for the big button and the copy-to-clipboard link.
   Add or remove social links freely — any website works, not just these.
   ========================================================================== */

export const contact = {
  email: "aarav.mehta@example.com",

  // The short message above your email in the last section.
  note: "I read everything. If you have an internship, a project idea, or just want to talk about something you are building — say hello.",
};

export const socials = [
  { label: "GitHub", handle: "@aaravmehta", url: "https://github.com/" },
  { label: "LinkedIn", handle: "in/aaravmehta", url: "https://linkedin.com/" },
  { label: "Instagram", handle: "@aarav.builds", url: "https://instagram.com/" },
  { label: "LeetCode", handle: "@aaravm", url: "https://leetcode.com/" },
];

/* ==========================================================================
   10. BROWSER TAB, GOOGLE & LINK PREVIEWS

   "url" is the one line worth coming back for. Fill it in AFTER you put the
   site online (step 3 of the README) — it switches on the sitemap, the
   canonical link and the preview card that WhatsApp and LinkedIn show.
   ========================================================================== */

export const site = {
  // Your live address. Leave "" until you have deployed.
  // GitHub Pages gives you:  https://YOUR-USERNAME.github.io
  // (no slash at the end)
  url: "https://KartikJain14.github.io",

  // Only needed for GitHub Pages.
  //   Repository named  YOUR-USERNAME.github.io  ->  leave as ""
  //   Any other repository name                 ->  "/your-repo-name"
  // Get this wrong and the page loads without styling. See the README.
  base: "/template-portfolio",

  title: "Aarav Mehta — Computer Science Undergraduate",

  description:
    "Portfolio of Aarav Mehta, a B.Tech Computer Science student at Sunrise Institute of Technology. Projects, experience and achievements.",

  // The picture people see when your link is shared in a chat. One is drawn
  // for you in your accent colour. To use your own, put a 1200x630 image in
  // the "public" folder and point this at it, e.g. "/my-card.jpg".
  ogImage: "/og.png",

  // Used by search engines and screen readers.
  language: "en",
};

/* ==========================================================================
   11. SECTION HEADINGS
   The titles of each block on the page. Change the wording if you like —
   just do not change the words on the left (about:, experience:, ...).
   Sections with no content are removed from the page automatically.
   ========================================================================== */

export const sections = {
  about: {
    label: "About",
    title: "A bit about me",
    lead: "",
  },
  experience: {
    label: "Experience",
    title: "Where I have been putting in the hours",
    lead: "Committees, clubs and roles that taught me more than any lecture did.",
  },
  projects: {
    label: "Projects",
    title: "Things I have built",
    lead: "Small projects, shipped and used by real people.",
  },
  achievements: {
    label: "Achievements",
    title: "Wins worth mentioning",
    lead: "",
  },
  contact: {
    label: "Contact",
    title: "Let's build something",
    lead: "",
  },
};
