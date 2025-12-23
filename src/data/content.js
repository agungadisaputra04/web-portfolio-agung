export const EDUCATION = [
  {
    school: "UTDI (Universitas Teknologi Digital Indonesia)",
    program: "Sistem Informasi",
    year: "2024 — 2025",
    notes: ["Capstone: Web Attendance (Dynamic QR + Geolocation)."],
  },
  {
    school: "STMIK AKAKOM (UTDI)",
    program: "Application Software Engineering",
    year: "2017 — 2021",
    notes: ["Capstone: Sistem Pemesanan Sablon di BUTTERDRIPS Menggunakan Framework Laravel"],
  },
];

export const EXPERIENCE = [
  {
    company: "PT Dua Empat Tujuh (Solusi247)",
    role: "Support Developer (Operations Focus)",
    year: "March 2025 — Present",
    bullets: [
      "Provide day-to-day production support, including incident investigation and log-driven troubleshooting.",
      "Handle telecom-grade operational flows with validation and reconciliation processes.",
      "Develop and maintain Bash and Python automation for operational checks, reporting, and alert notifications.",
    ],
    tags: [
      "Linux",
      "Bash",
      "Python",
      "Monitoring",
      "Log Analysis",
      "Incident Triage",
      "Automation",
    ],
  },
  
  {
    company: "PT Dua Empat Tujuh (Solusi247)",
    role: "Support Engineer",
    year: "March 2023 — March 2025",
    bullets: [
      "Monitor production systems and perform initial incident analysis and escalation.",
      "Execute daily operational checks and support validation activities.",
      "Assist with basic Bash scripting and routine reporting tasks.",
    ],
    tags: [
      "Linux",
      "Ticketing",
      "Bash",
      "Monitoring",
      "Incident Handling",
      "Daily Operations",
    ],
  },  
];

export const CERTIFICATES = [
  { name: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", year: "2024", status: "Completed", url: "https://www.dicoding.com/certificates/07Z64M1D2PQR" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM", year: "2024", status: "Completed", url: "https://www.coursera.org/account/accomplishments/verify/ESHSHLNGS9JZ?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse" },
  { name: "Technical Support Fundamentals", issuer: "Google", year: "2022", status: "Completed", url: "https://www.coursera.org/account/accomplishments/verify/RGTHTDDRY6CC" },
  { name: "The Complete Full-Stack Web Development Bootcamp", issuer: "Udemy", year: "2022", status: "Completed", url: "https://www.udemy.com/certificate/UC-b2733ac9-0a77-4783-b2b0-bf3a89d01c22/" },
  { name: "Diploma in Web Development", issuer: "NIIT Limited", year: "2021", status: "Completed", url: "#" },
];

export const PROJECTS = [
  {
    name: "Hoodnote Monitor – Log & Alert System",
    desc: "Log scanning, error thresholding, snapshots, Telegram alerts across multiple servers.",
    stack: ["Bash", "Python", "Telegram Bot API", "Linux"],
    github: "https://github.com/agungadisaputra04",
    demo: "https://docs.agungops.cloud",
    image: "/projects/hoodnote.png",
  },
  {
    name: "Reporting Automation",
    desc: "Automation for daily reporting & Excel outputs to reduce manual repetitive work.",
    stack: ["Python", "Pandas", "openpyxl"],
    github: "https://github.com/agungadisaputra04",
    demo: "#",
    image: "/projects/ngrs.png",
  },
  {
    name: "Web Attendance (Capstone)",
    desc: "Dynamic QR + geolocation validation attendance system.",
    stack: ["Laravel", "MySQL", "Leaflet"],
    github: "https://github.com/agungadisaputra04/presensi_app",
    demo: "#",
    image: "/projects/attendance.png",
  },
];
