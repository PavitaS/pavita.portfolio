// ===== Edit your content here =====
const skills = {
  "Frontend": ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI", "PWA"],
  "Backend & Frameworks": ["Java", "Spring Boot", "REST APIs", "Spring Security", "JWT", "Hibernate / JPA"],
  "Databases": ["MySQL", "SQL", "DBMS", "Spring Data JPA", "Schema Design"],
  "Engineering Tools & Concepts": ["Git", "GitHub", "Eclipse", "IntelliJ IDEA", "Postman", "OOP", "Collections", "Exception Handling"]
};

const softSkills = ["Strong communication", "Teamwork", "Highly adaptable", "Quick learner", "Analytical thinking", "Problem solving"];

const projects = [
  {
    title: "Cable Service Management System",
    role: "Individual Project · Developer",
    date: "Feb 2026 – Aug 2026",
    desc: "Full-stack platform for managing cable customers, monthly payments, set-top boxes, customer history and user accounts.",
    points: [
      "Layered architecture with controllers, services, repositories, DTOs and entities behind RESTful APIs.",
      "Spring Data JPA and Hibernate for ORM, persistence and MySQL database operations.",
      "CRUD, search, filtering, sorting, pagination, input validation and structured error handling.",
      "JWT-based authentication and authorization with Spring Security, wired end-to-end to the React frontend.",
      "Dashboard analytics summarising customers, payments and active connections."
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "MySQL", "Spring Data JPA", "Hibernate", "REST APIs"],
    github: "https://github.com/PavitaS/Cable-Service-Management-System"
  },
  {
    title: "Construction Attendance and Payroll Management System",
    role: "Individual Project · Developer",
    date: "Jan 2026 – Jul 2026",
    desc: "Full-stack application to manage construction workers, daily attendance and weekly payroll.",
    points: [
      "CRUD operations, attendance history and payroll calculations using Spring Boot and MySQL.",
      "Dashboard displaying employee and attendance details.",
      "Responsive React.js interfaces with PWA support for mobile and desktop access."
    ],
    tech: ["Java", "SQL", "Spring Boot", "React.js", "MySQL", "REST APIs"],
    github: "https://github.com/PavitaS/construction-attendance-system/"
  },
  {
    title: "Job Work and Production Management System",
    role: "Individual Project · Developer",
    date: "Sep 2026 – Oct 2026",
    desc: "Java application to manage customers, job orders and production workflows.",
    points: [
      "CRUD for order tracking, production updates, deliveries, invoices and payments.",
      "Hibernate ORM for persistence, entity mapping and transaction management.",
      "Reusable Java classes with MySQL database integration."
    ],
    tech: ["Java", "Hibernate ORM", "MySQL", "Maven", "HQL"],
    github: "https://github.com/PavitaS/Jobwork-and-Production-Management-System"
  },
  {
    title: "Detection and Classification of Cardiopulmonary Disorder",
    role: "Academic Project",
    date: "Aug 2023 – Feb 2026",
    desc: "AI-based lung disease detection using lung sound analysis and chest X-ray images to identify tuberculosis, pneumonia and COPD.",
    points: [
      "Applied machine learning and deep learning for disease classification and abnormality detection.",
      "Achieved 85.6% accuracy, 91.8% recall and 0.93 AUC."
    ],
    tech: ["AI", "Machine Learning", "Deep Learning"],
    github: "https://github.com/AkashA67/lung_disease_detection"
  }
];

const experience = [
  {
    company: "JSW Steel Ltd", role: "Intern · On-site · Salem, Tamil Nadu", date: "Jun 2025 – Jul 2025",
    points: ["Learned fundamentals of industrial automation, focusing on PLC and SCADA systems used in steel manufacturing.",
             "Gained practical knowledge of instrumentation, process monitoring and electrical systems."],
    tech: ["Industrial Automation", "Process Monitoring", "Electrical Systems"]
  },
  {
    company: "Salem Steel Plant – SAIL", role: "Intern · On-site · Salem, Tamil Nadu", date: "Jun 2025",
    points: ["Observed stainless-steel manufacturing workflows and large-scale industrial operations.",
             "Supported preventive maintenance including motor troubleshooting and control panel servicing.",
             "Maintained daily technical records covering equipment reliability and industrial safety practices."],
    tech: ["Industrial Operations", "Electrical Systems", "Safety Awareness"]
  },
  {
    company: "NCR Corporation Pvt Ltd", role: "Intern · On-site · Chengalpattu, Tamil Nadu", date: "Jun 2024 – Jul 2024",
    points: ["Assisted in ATM module assembly and functional testing, with exposure to manufacturing and quality assurance.",
             "Worked with APTRA and PANGEA for ATM module testing and diagnostics.",
             "Practised troubleshooting, sensor validation, SMPS checks, alarm testing and quality verification."],
    tech: ["ATM Assembly & Testing", "Quality Awareness"]
  }
];

const certs = [
  "Java Masterclass 2025 — Udemy",
  "Data Science for Engineers — NPTEL",
  "Computer Networks and Internet Protocol — NPTEL",
  "Machine Learning and Deep Learning Fundamentals and Applications — NPTEL",
  "Design Thinking — A Primer — NPTEL"
];

// ===== Rendering =====
const $ = (id) => document.getElementById(id);
const tags = (list, cls = "") => list.map((t) => `<span class="tag ${cls}">${t}</span>`).join("");

$("skill-grid").innerHTML = Object.entries(skills)
  .map(([name, list]) => `<div class="card"><h3>${name}</h3><div class="tags">${tags(list)}</div></div>`).join("");

$("soft-skills").innerHTML = tags(softSkills, "soft");

$("project-list").innerHTML = projects.map((p) => `
  <article class="card project">
    <header>
      <div><h3>${p.title}</h3><p class="muted">${p.role}</p></div>
      <span class="date">${p.date}</span>
    </header>
    <p class="lead">${p.desc}</p>
    <ul>${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <div class="tags">${tags(p.tech)}</div>
    <p><a class="gh" href="${p.github}" target="_blank" rel="noopener">View on GitHub</a></p>
  </article>`).join("");

$("exp-list").innerHTML = experience.map((e) => `
  <article class="card job">
    <header>
      <div><h3>${e.company}</h3><p class="muted">${e.role}</p></div>
      <span class="date">${e.date}</span>
    </header>
    <ul>${e.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <div class="tags">${tags(e.tech)}</div>
  </article>`).join("");

$("cert-list").innerHTML = certs.map((c) => `<div class="card cert">${c}</div>`).join("");
$("year").textContent = new Date().getFullYear();

// ===== Theme toggle (remembers choice) =====
const root = document.documentElement;
try { const saved = localStorage.getItem("theme"); if (saved) root.dataset.theme = saved; } catch (e) {}
$("theme").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// ===== Contact form: opens the visitor's email app with the message filled in =====
$("contact-form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const f = new FormData(ev.target);
  const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:pavitasasikumar@gmail.com?subject=${encodeURIComponent(f.get("subject") || "Portfolio enquiry")}&body=${encodeURIComponent(body)}`;
});
