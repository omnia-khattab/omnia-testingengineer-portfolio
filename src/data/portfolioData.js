export const personalInfo = {
  avatar: "/omnia.png",
  name: "Omnia Khattab",
  title: "Software Testing Engineer",
  location: "Giza, Egypt",
  email: "omniakhattab17@gmail.com",
  linkedin: "https://www.linkedin.com/in/omnia-khattab6",
  heroStatement: "3+ years in Web Development. Now focused on Software Quality.",
  heroSupporting:
    "I combine a Computer Science background and hands-on web development experience with a testing mindset to build, validate, and improve reliable web applications.",
  visualAccents: {
    badge: "From Development to Quality",
    tagline: "Build. Test. Improve.",
    pill: "Development Background → Testing Mindset",
  },
};

export const educationAndTraining = [
  {
    type: "academic-degree",
    title: "B.Sc. Computer Science",
    institution: "Faculty of Science, Cairo University",
    period: "2018",
    badge: "University Degree",
    badgeColor: "indigo",
  },
  {
    type: "professional-training",
    title: "Professional Training",
    institution: "Ministry of Communications and Information Technology (MCIT)",
    subtitle: "Software Testing Track",
    period: "Jul 2026 – Present",
    badge: "In Progress",
    badgeColor: "emerald",
    tags: [
      "Manual Testing",
      "API Testing",
      "Database Testing",
      "Selenium",
      "TestNG",
      "ISTQB FL v4",
    ],
  },
];

export const skillsCategories = [
  {
    id: "manual",
    name: "Manual Testing",
    icon: "CheckSquare",
    skills: [
      "Functional Testing",
      "UI/UX Testing",
      "Regression Testing",
      "Cross-browser Testing",
      "Security Testing",
      "Test Case Design",
      "Bug Reporting",
    ],
  },
  {
    id: "api",
    name: "API Testing",
    icon: "Network",
    skills: [
      "Postman",
      "RESTful APIs",
      "Request/Response Validation",
      "Status Code Verification",
      "Negative Payload Testing",
    ],
  },
  {
    id: "automation",
    name: "Automation Testing",
    icon: "PlayCircle",
    skills: ["Selenium WebDriver", "TestNG", "Java", "OOP", "Page Object Model"],
  },
  {
    id: "database",
    name: "Database Testing",
    icon: "Database",
    skills: ["SQL", "MySQL", "PostgreSQL", "Data Validation", "CRUD Verification"],
  },
  {
    id: "mobile",
    name: "Mobile Testing",
    icon: "Smartphone",
    skills: [
      "Flutter App Testing",
      "Android",
      "iOS",
      "Mobile Responsiveness",
    ],
  },
];

export const toolsList = [
  "Jira",
  "Xray",
  "Azure DevOps",
  "Git",
  "GitHub",
  "Excel",
  "CI/CD Basics",
];

export const workExperience = [
  {
    role: "Software Testing Engineer",
    company: "DEPI",
    type: "Training Program",
    badge: "Training",
    badgeColor: "emerald",
    period: "Jul 2026 – Present",
    isTraining: true,
    summary:
      "Practical Software Testing training covering Manual, API, Database, and Automation Testing.",
    tags: ["Manual Testing", "API Testing", "SQL", "Selenium", "TestNG", "ISTQB"],
    details: [
      "Mastering Java & Object-Oriented Programming for automation engineering.",
      "Studying ISTQB Foundation Level v4 testing principles and design techniques.",
      "Executing manual testing: functional, exploratory, and regression.",
      "Managing test artifacts and defect life cycles using Jira & Xray.",
      "Validating database integrity with SQL queries.",
      "Performing API request/response testing with Postman.",
      "Constructing automated UI tests with Selenium WebDriver and TestNG.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    type: "Freelance",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "Aug 2024 – Dec 2025",
    summary:
      "Built and maintained production web applications using React.js, Laravel, Inertia.js, and Tailwind CSS.",
    tags: ["React", "Laravel", "Inertia.js", "Tailwind CSS"],
    details: [
      "Rebuilt production website using React.js, Laravel, Inertia.js, and Tailwind CSS.",
      "Developed the complete customer-facing website with responsive UI.",
      "Built a role-based admin dashboard with granular permission controls.",
      "Maintained production website and handled deployments through cPanel.",
      "Delivered ongoing content updates, performance enhancements, and bug resolutions.",
    ],
  },
  {
    role: "React Front-End Developer",
    company: "Smart Sigma",
    type: "Employment",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "Jun 2024 – Dec 2025",
    summary:
      "Built core modules of a Student Management System and integrated REST APIs.",
    tags: ["React", "REST APIs", "TanStack Query", "Validation", "RBAC"],
    details: [
      "Built authentication, dashboard, search, and course overview modules.",
      "Integrated REST APIs for data fetching, state caching, and error handling.",
      "Implemented multi-step registration with real-time input validation.",
      "Implemented protected routes and role-based UI rendering.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Naxum",
    type: "Employment",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "Nov 2022 – Apr 2023",
    summary:
      "Built responsive business websites using HTML, CSS, JavaScript, and Bootstrap.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    details: [
      "Built responsive, cross-browser business websites.",
      "Delivered Home, Webinar, Shopping Cart, and Error pages.",
      "Implemented client-side validation for forms.",
      "Resolved JavaScript defects before and after production deployment.",
    ],
  },
  {
    role: "Laravel Full-Stack Developer",
    company: "Freelance",
    type: "Freelance",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "2021 – 2022",
    summary:
      "Designed, built, and deployed a complete Laravel business website.",
    tags: ["Laravel", "PHP", "MySQL"],
    details: [
      "Designed, built, and deployed a complete Laravel business website.",
      "Built an admin dashboard with authentication and session management.",
      "Developed CRUD modules with parameterized database operations.",
      "Implemented image upload, pagination, and server-side form validation.",
    ],
  },
];

export const offeredServices = [
  {
    id: "manual-testing",
    title: "Manual Testing",
    icon: "ClipboardCheck",
    description:
      "Functional, regression, UI, and cross-browser testing to detect real-world issues before users do.",
  },
  {
    id: "api-testing",
    title: "API Testing",
    icon: "Terminal",
    description:
      "REST API testing and request/response validation using Postman.",
  },
  {
    id: "web-app-testing",
    title: "Web Application Testing",
    icon: "Globe",
    description:
      "Testing user flows, forms, authentication, responsive behavior, and application functionality.",
  },
  {
    id: "bug-reporting",
    title: "Test Cases & Bug Reporting",
    icon: "FileSpreadsheet",
    description:
      "Clear, structured test cases and reproducible bug reports with severity ratings.",
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    icon: "Cpu",
    description:
      "Automated regression suites using Selenium WebDriver and TestNG with Page Object Model architecture.",
  },
];

export const projectBlueprints = [
  {
    id: "web-app-case-study",
    title: "Web Application Testing",
    category: "Manual & Exploratory Testing",
    icon: "Globe",
    summary:
      "End-to-end testing of a multi-role web platform covering authentication, user flows, and cross-browser behavior.",
    tools: ["Jira", "Xray", "Chrome DevTools", "Excel"],
    highlights: [
      "Test Plan & Requirement Traceability Matrix (RTM)",
      "Edge-case boundary testing on complex form validations",
      "Defect life-cycle tracking with reproduction steps",
    ],
  },
  {
    id: "api-testing-case-study",
    title: "API Testing with Postman",
    category: "API & Backend Testing",
    icon: "Network",
    summary:
      "RESTful API validation covering endpoint contracts, authentication flows, and error response testing.",
    tools: ["Postman", "Newman", "JSON Schema Validator"],
    highlights: [
      "Token-based authorization flow testing",
      "Boundary testing on payload limits",
      "Exportable Postman collections",
    ],
  },
  {
    id: "automation-case-study",
    title: "Selenium Automation Testing",
    category: "Test Automation",
    icon: "Cpu",
    summary:
      "Automated UI regression framework using Java, Selenium WebDriver, and TestNG with Page Object Model.",
    tools: ["Java", "Selenium WebDriver", "TestNG", "Maven"],
    highlights: [
      "Page Object Model (POM) architecture",
      "Explicit wait strategies eliminating flakiness",
      "HTML TestNG execution report with screenshot capture",
    ],
  },
];

export const devProjects = [
  {
    title: "Production Web Platform",
    company: "Freelance",
    role: "Full-Stack Developer",
    tech: ["React.js", "Laravel", "Inertia.js", "Tailwind CSS", "MySQL"],
    description:
      "Rebuilt and deployed a full production web application with customer-facing interface and role-based admin dashboard.",
  },
  {
    title: "Student Management System",
    company: "Smart Sigma",
    role: "React Front-End Developer",
    tech: ["React.js", "REST APIs", "TanStack Query", "Tailwind CSS"],
    description:
      "Core modules of an enterprise educational platform: authentication, dashboard, multi-step registration, and protected routes.",
  },
  {
    title: "Laravel Business Platform",
    company: "Freelance",
    role: "Laravel Developer",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    description:
      "Complete business web application with admin control panel, CRUD modules, authentication, and deployment.",
  },
];

export const certifications = [
  {
    id: "mahara-tech-testing",
    title: "Introduction to Software Testing Concepts & Techniques",
    issuer: "Mahara-Tech",
    badge: "Verified Credential",
    badgeColor: "emerald",
    date: "Completed",
    certificateImage:
      "/Introduction to Software Testing Concepts & Techniques_Certificate.PNG",
    topics: [
      "Fundamentals of Software Testing",
      "Software Testing Life Cycle (STLC)",
      "Bug Reporting & Defect Severity",
      "Black-box Testing Techniques",
      "Static vs. Dynamic Testing",
    ],
  },
  {
    id: "istqb-ctfl",
    title: "ISTQB Certified Tester Foundation Level (CTFL v4.0)",
    issuer: "ISTQB",
    badge: "In Progress · Target 2026",
    badgeColor: "amber",
    date: "In Training",
    topics: [
      "Fundamentals of Testing",
      "Testing Throughout the SDLC",
      "Static Testing",
      "Test Analysis and Design",
      "Managing the Test Activities",
    ],
  },
];
