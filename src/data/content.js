export const EDUCATION = [
  {
    school: "UTDI (Universitas Teknologi Digital Indonesia)",
    program: "Sistem Informasi",
    year: "2023 — Present",
    notes: ["Capstone: Web Attendance (Dynamic QR + Geolocation)."],
  },
];

export const EXPERIENCE = [
  {
    company: "PT Dua Empat Tujuh (Solusi247)",
    role: "L1 Support Engineer (RMO-BSO / Ops)",
    year: "— Present",
    bullets: [
      "Monitor production systems, investigate incidents, and perform log-based troubleshooting.",
      "Handle telecom-grade flows (UPCC/INGW/gateway-http) with operational validation & reconciliation.",
      "Build automation scripts (Bash/Python) for checks, reporting, and Telegram alerting.",
    ],
    tags: ["Linux", "Bash", "Python", "Monitoring", "Incident Handling"],
  },
];

export const CERTIFICATES = [
  { name: "Linux Fundamentals", issuer: "Cisco / NDG", year: "2024", status: "Completed", url: "#" },
  { name: "Docker Essentials", issuer: "Course", year: "2025", status: "In Progress", url: "#" },
];

export const PROJECTS = [
  {
    name: "Hoodnote Monitor – Log & Alert System",
    desc: "Log scanning, error thresholding, snapshots, Telegram alerts across multiple servers.",
    stack: ["Bash", "Python", "Telegram Bot API", "Linux"],
    github: "https://github.com/username/hoodnote-monitor",
    demo: "https://docs.agungops.cloud",
    image: "/projects/hoodnote.png",
  },
  {
    name: "NGRS Reporting Automation",
    desc: "Automation for daily reporting & Excel outputs to reduce manual repetitive work.",
    stack: ["Python", "Pandas", "openpyxl"],
    github: "https://github.com/username/ngrs-reporting",
    demo: "#",
    image: "/projects/ngrs.png",
  },
  {
    name: "Web Attendance (Capstone)",
    desc: "Dynamic QR + geolocation validation attendance system.",
    stack: ["Laravel", "MySQL", "Leaflet"],
    github: "https://github.com/username/attendance-web",
    demo: "#",
    image: "/projects/attendance.png",
  },
];
