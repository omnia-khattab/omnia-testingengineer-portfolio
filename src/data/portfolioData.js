export const personalInfo = {
  avatar: "/omnia.png", // Default elegant avatar. To use your photo, save it as public/omnia.jpg and set avatar: "/omnia.jpg"
  name: "Omnia Khattab",
  title: "Software Testing Engineer",
  location: "Giza, Egypt",
  email: "omniakhattab17@gmail.com",
  linkedin: "https://www.linkedin.com/in/omnia-khattab6", // Clickable LinkedIn profile link
  //github: "https://github.com/omniakhattab",
  usp: "Software Testing Engineer with a Computer Science background and 3+ years of hands-on web development experience.",
  supportingCopy: "I combine a developer's understanding of web applications with a tester's mindset to identify defects, validate functionality, and help deliver reliable software.",
  visualAccents: {
    badge: "From Development to Quality Engineering",
    tagline: "Build. Test. Improve.",
    pill: "Development Background → Testing Mindset"
  },
  positioningFormula: "3+ Years Web Development + Software Testing Specialization",
  storyPillars: [
    {
      title: "Dual Perspective",
      desc: "Deep familiarity with React, Laravel, state lifecycles, and asynchronous calls allows me to pinpoint where bugs actually originate in the codebase.",
      icon: "Code2"
    },
    {
      title: "Edge Cases & Specs",
      desc: "Analyzing user stories through both an architectural lens and an inquisitive testing mindset to catch boundary vulnerabilities before production.",
      icon: "ShieldAlert"
    },
    {
      title: "Data & API Validation",
      desc: "Testing beyond the visual layer — validating payloads, status codes, authentication tokens, and SQL database constraints.",
      icon: "Database"
    },
    {
      title: "Dev Empathy & Clarity",
      desc: "Writing reproducible, precise defect reports with stack traces and clear expected vs. actual behaviors that developers love working with.",
      icon: "MessageSquareCode"
    }
  ]
};

export const educationAndTraining = [
  {
    type: "professional-training",
    title: "Diploma in Software Testing",
    institution: "Ministry of Communications and Information Technology (DEPI)",
    period: "July 2026 – Dec 2026",
    badge: "Professional Training",
    badgeColor: "emerald",
    summary: "Intensive specialized software testing program focused on modern quality assurance methodologies, test automation, and enterprise QA tooling.",
    topics: [
      "Java & OOP",
      "ISTQB Foundation Level v4",
      "Manual Testing",
      "Jira & Xray",
      "Database Testing",
      "API Testing",
      "Automation Testing",
      "Selenium WebDriver",
      "TestNG"
    ]
  },
  {
    type: "academic-degree",
    title: "Bachelor of Science in Computer Science",
    institution: "Faculty of Science, Cairo University",
    period: "Graduated 2018",
    badge: "University Degree",
    badgeColor: "indigo",
    summary: "Comprehensive academic foundation in computer science principles, algorithms, data structures, database design, software engineering, and object-oriented systems.",
    topics: [
      "Algorithms & Data Structures",
      "Object-Oriented Programming",
      "Relational Database Systems",
      "Software Engineering Principles",
      "Operating Systems & Networking",
      "Discrete Mathematics"
    ]
  }
];

export const skillsCategories = [
  {
    id: "manual",
    name: "Manual Testing",
    icon: "CheckSquare",
    description: "Systematic test analysis, scenario design, and defect detection across user journeys.",
    skills: [
      { name: "Functional Testing", level: "Core" },
      { name: "UI/UX Testing", level: "Core" },
      { name: "Regression Testing", level: "Core" },
      { name: "Cross-browser Testing", level: "Core" },
      { name: "Security Testing Basics", level: "Applied" },
      { name: "Test Case Design", level: "Core" },
      { name: "Bug Reporting & Triage", level: "Core" }
    ]
  },
  {
    id: "automation",
    name: "Automation Testing",
    icon: "PlayCircle",
    description: "Automated regression suites and browser verification using Java ecosystem.",
    skills: [
      { name: "Selenium WebDriver", level: "Core" },
      { name: "TestNG", level: "Core" },
      { name: "Java", level: "Core" },
      { name: "OOP (Object-Oriented)", level: "Core" },
      { name: "Page Object Model (POM)", level: "Applied" }
    ]
  },
  {
    id: "api",
    name: "API Testing",
    icon: "Network",
    description: "Validating RESTful contracts, response schemas, and backend data flows.",
    skills: [
      { name: "Postman", level: "Core" },
      { name: "RESTful APIs", level: "Core" },
      { name: "API Validation", level: "Core" },
      { name: "Status Code Verification", level: "Core" },
      { name: "Negative Payload Testing", level: "Core" }
    ]
  },
  {
    id: "database",
    name: "Database Testing",
    icon: "Database",
    description: "Verifying backend consistency, transactional safety, and query integrity.",
    skills: [
      { name: "SQL", level: "Core" },
      { name: "MySQL", level: "Core" },
      { name: "PostgreSQL", level: "Core" },
      { name: "Data Validation", level: "Core" },
      { name: "Basic SQL Queries & Joins", level: "Core" }
    ]
  },
  {
    id: "mobile",
    name: "Mobile Testing",
    icon: "Smartphone",
    description: "Validating mobile applications across screen factors, gestures, and OS states.",
    skills: [
      { name: "Flutter App Testing", level: "Applied" },
      { name: "Android Testing Scenarios", level: "Applied" },
      { name: "iOS Testing Scenarios", level: "Applied" },
      { name: "Mobile Responsiveness", level: "Core" }
    ]
  },
  {
    id: "tools",
    name: "Testing & Project Tools",
    icon: "Wrench",
    description: "Enterprise test management, issue tracking, and collaborative version control.",
    skills: [
      { name: "Jira", level: "Core" },
      { name: "Xray Test Management", level: "Core" },
      { name: "Azure DevOps", level: "Applied" },
      { name: "Git", level: "Core" },
      { name: "GitHub", level: "Core" },
      { name: "Excel for Test Cases", level: "Core" },
      { name: "CI/CD Basics", level: "Familiar" }
    ]
  },
  {
    id: "webdev",
    name: "Web Dev Foundation",
    icon: "Layers",
    description: "Real-world engineering background providing deep code-level insight.",
    skills: [
      { name: "React.js", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Proficient" },
      { name: "Tailwind CSS & Bootstrap", level: "Proficient" },
      { name: "Laravel", level: "Proficient" },
      { name: "Inertia.js", level: "Proficient" },
      { name: "REST APIs Integration", level: "Proficient" }
    ]
  },
  {
    id: "exploring",
    name: "Currently Exploring",
    icon: "Compass",
    description: "Tools and areas of active learning and familiarity (not claimed as established expertise).",
    isExploring: true,
    skills: [
      { name: "JMeter", status: "Currently Exploring / Familiarity" },
      { name: "LoadRunner", status: "Currently Exploring / Familiarity" },
      { name: "Performance Profiling", status: "Currently Exploring / Familiarity" }
    ]
  }
];

export const workExperience = [
  {
    role: "Software Testing Engineer",
    company: "DEPI (Digital Egypt Pioneers Initiative)",
    type: "Professional Practical Training",
    badge: "Training Program",
    badgeColor: "emerald",
    period: "Jul 2026 – Present",
    location: "Egypt",
    isTraining: true,
    summary: "Receiving practical, hands-on training in enterprise Software Testing and Quality Assurance methodologies.",
    highlights: [
      "Mastering Java & Object-Oriented Programming (OOP) for automation engineering.",
      "Studying ISTQB Foundation Level v4 standard testing principles and test design techniques.",
      "Executing manual testing methodologies: functional, non-functional, exploratory, and regression.",
      "Managing end-to-end test artifacts, test cases, and defect life cycles using Jira & Xray.",
      "Validating database integrity with SQL queries and cross-checking data consistency.",
      "Performing API request/response and contract testing with Postman.",
      "Constructing automated UI test scripts utilizing Selenium WebDriver and TestNG framework."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Freelancer",
    type: "Freelance",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "Aug 2024 – Dec 2025",
    location: "Remote",
    summary: "Architected, developed, and maintained full-stack web platforms with direct client ownership.",
    highlights: [
      "Architected and rebuilt a production website using React.js, Laravel, Inertia.js, and Tailwind CSS.",
      "Developed the complete customer-facing website with responsive UI and optimized client assets.",
      "Built a role-based admin dashboard with granular permission controls and secure data mutations.",
      "Maintained the production website and handled deployments through cPanel.",
      "Delivered ongoing content updates, performance enhancements, and bug resolutions."
    ]
  },
  {
    role: "React Front-End Developer",
    company: "Smart Sigma",
    type: "Contract / Employment",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "Jun 2024 – Dec 2025",
    location: "Cairo, Egypt",
    summary: "Spearheaded front-end module development for an enterprise Student Management System.",
    highlights: [
      "Built core modules of a Student Management System including authentication, dashboard, search, and course overview.",
      "Integrated REST APIs for reliable data fetching, state caching, and error handling.",
      "Implemented multi-step registration workflows with rigorous real-time input validation.",
      "Implemented protected route guards and role-based UI conditional rendering."
    ]
  },
  {
    role: "Front-End Developer",
    company: "Naxum",
    type: "Employment",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "Nov 2022 – Apr 2023",
    location: "Remote / Hybrid",
    summary: "Developed cross-browser web interfaces for international marketing and business web solutions.",
    highlights: [
      "Built responsive, cross-browser business websites using HTML, CSS, JavaScript, and Bootstrap.",
      "Collaborated closely with designers and backend developers to ensure seamless API integrations.",
      "Delivered high-converting Home, Webinar, Shopping Cart, and custom Error pages.",
      "Implemented robust client-side validation for form security and enhanced user flow.",
      "Resolved complex JavaScript defects and UI discrepancies before and after production deployment."
    ]
  },
  {
    role: "Laravel Full-Stack Developer",
    company: "Freelance",
    type: "Freelance",
    badge: "Engineering",
    badgeColor: "indigo",
    period: "2021 – 2022",
    location: "Remote",
    summary: "Designed and engineered an end-to-end Laravel business portal from conception to live launch.",
    highlights: [
      "Designed, built, and deployed a complete Laravel business website from initial requirements to launch.",
      "Built a comprehensive admin dashboard with custom analytics and controls.",
      "Implemented secure authentication, session management, and CSRF protection.",
      "Developed full CRUD modules with parameterized database operations.",
      "Implemented secure image upload handling, responsive pagination, and strict server-side form validation."
    ]
  }
];

export const offeredServices = [
  {
    id: "manual-testing",
    title: "Manual Software Testing",
    icon: "ClipboardCheck",
    description: "Systematic execution of functional, regression, UI, cross-browser, and exploratory testing to detect real-world issues before users do.",
    keywords: ["Functional", "Regression", "UI Testing", "Cross-browser", "Exploratory"],
    deliverables: "Detailed test execution logs, defect reports with severity ratings, and test closure summary."
  },
  {
    id: "test-case-design",
    title: "Test Case Design",
    icon: "FileSpreadsheet",
    description: "Writing clear, structured, modular, and reusable test cases based on requirements, user stories, and edge-case boundary scenarios.",
    keywords: ["Test Scenarios", "Equivalence Partitioning", "Boundary Value", "Jira / Xray", "Traceability"],
    deliverables: "Comprehensive test suites with preconditions, step-by-step actions, and verifiable expected results."
  },
  {
    id: "api-testing",
    title: "API Testing",
    icon: "Terminal",
    description: "Testing RESTful APIs using Postman to validate request payloads, response bodies, HTTP status codes, headers, and authentication tokens.",
    keywords: ["Postman", "REST APIs", "JSON Schema", "Status Codes", "Negative Scenarios"],
    deliverables: "Postman test collections, schema validation scripts, and endpoint reliability audits."
  },
  {
    id: "database-testing",
    title: "Database Testing",
    icon: "Database",
    description: "Validating stored data integrity, schema consistency, and application-to-database transactions using SQL queries.",
    keywords: ["SQL Queries", "Data Integrity", "CRUD Validation", "Constraints", "MySQL / Postgres"],
    deliverables: "Data consistency verification scripts, schema audits, and backend vs. frontend data matching reports."
  },
  {
    id: "bug-reporting",
    title: "Bug Reporting & Triage",
    icon: "Bug",
    description: "Identifying, isolating, reproducing, and documenting software defects with clear reproduction steps, logs, and developer-friendly insights.",
    keywords: ["Defect Tracking", "Reproduction Steps", "Severity vs Priority", "Root-Cause Insight", "Jira"],
    deliverables: "High-quality bug reports with visual evidence, environment details, and developer notes."
  },
  {
    id: "web-app-testing",
    title: "Web Application Testing",
    icon: "Globe",
    description: "Testing web applications across Chrome, Firefox, Safari, Edge, varied screen viewports, user permissions, and complex workflows.",
    keywords: ["Responsive UI", "Cross-Browser", "Role-Based Access", "Performance Feel", "Accessibility"],
    deliverables: "Cross-browser compatibility matrix and responsive breakpoint verification checklist."
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    icon: "Cpu",
    description: "Creating automated regression and sanity UI test suites using Selenium WebDriver and TestNG with clean object-oriented architecture.",
    keywords: ["Selenium WebDriver", "TestNG", "Java", "POM Architecture", "Assertions"],
    deliverables: "Automated test scripts, XML execution suites, and automated test execution reports."
  },
  {
    id: "mobile-testing",
    title: "Mobile App Testing",
    icon: "Smartphone",
    description: "Testing mobile applications across Android and iOS scenarios to verify responsive layouts, touch gestures, and interrupted states.",
    keywords: ["Android", "iOS", "Flutter Testing", "Touch Gestures", "Form Handling"],
    deliverables: "Mobile usability checklists, device-specific defect logs, and layout verification."
  }
];

export const projectBlueprints = [
  {
    id: "web-app-case-study",
    title: "Web Application Testing",
    status: "Testing Case Study — Coming Soon",
    category: "Manual & Exploratory Testing",
    icon: "Globe",
    summary: "Comprehensive end-to-end testing blueprint for a modern multi-role web platform.",
    appType: "E-Commerce / Enterprise Web Application",
    scope: "Functional validation, role-based authorization, responsive UI breakpoints, and cross-browser consistency (Chrome, Edge, Firefox, Safari).",
    testCasesPlanned: "50+ structured test cases covering user authentication, catalog search, checkout workflows, and error states.",
    approach: "Requirement analysis followed by equivalence partitioning and boundary value analysis. Systematic defect logging in Jira.",
    tools: ["Jira", "Xray", "Chrome DevTools", "Google Lighthouse", "Excel"],
    highlights: [
      "Test Plan & Requirement Traceability Matrix (RTM)",
      "Edge-case boundary testing on complex form validations",
      "Defect life-cycle tracking with step-by-step reproduction videos"
    ]
  },
  {
    id: "api-testing-case-study",
    title: "API Testing & Contract Validation",
    status: "Testing Case Study — Coming Soon",
    category: "API & Backend Testing",
    icon: "Network",
    summary: "RESTful API validation case study analyzing microservice endpoints, schema contracts, and error responses.",
    appType: "RESTful Service & Authentication Microservices",
    scope: "HTTP methods (GET, POST, PUT, DELETE, PATCH), authentication headers, query parameters, payload schemas, and rate limits.",
    testCasesPlanned: "35+ Postman tests covering positive flows, invalid tokens, malformed JSON payloads, and HTTP status codes (200, 201, 400, 401, 404, 500).",
    approach: "Automated test assertions written directly in Postman scripts for status code, latency, and response body schema validation.",
    tools: ["Postman", "Newman", "JSON Schema Validator", "REST Clients"],
    highlights: [
      "Token-based authorization flow testing (Bearer & JWT)",
      "Boundary testing on numeric and string payload limits",
      "Exportable Postman collections and environment variables"
    ]
  },
  {
    id: "automation-case-study",
    title: "Automation Testing Framework",
    status: "Testing Case Study — Coming Soon",
    category: "Test Automation",
    icon: "Cpu",
    summary: "Automated UI regression framework constructed with Java, Selenium WebDriver, and TestNG.",
    appType: "Web Application UI & User Portals",
    scope: "End-to-end smoke and regression test automation of critical business paths (Login, Dashboard, Form Submissions, Search).",
    testCasesPlanned: "20+ automated scenarios integrated into a TestNG XML test suite with parameterized parallel runs.",
    approach: "Page Object Model (POM) architectural design pattern to ensure high maintainability, reusable element locators, and clean test separation.",
    tools: ["Java", "Selenium WebDriver", "TestNG", "Maven", "IntelliJ IDEA"],
    highlights: [
      "Robust explicit wait strategies eliminating flakiness",
      "Page Object Model (POM) pattern implementation",
      "HTML TestNG execution report and failure screenshot capture"
    ]
  },
  {
    id: "database-case-study",
    title: "Database Integrity & CRUD Validation",
    status: "Testing Case Study — Coming Soon",
    category: "Database & Backend Testing",
    icon: "Database",
    summary: "Database testing blueprint verifying data integrity, constraints, and frontend-to-backend consistency.",
    appType: "Relational Database Backend (MySQL & PostgreSQL)",
    scope: "Data verification across CRUD operations, foreign key cascade behaviors, null constraints, and transaction rollbacks.",
    testCasesPlanned: "25+ SQL verification queries matching API responses with database records.",
    approach: "Direct database querying before and after UI actions to confirm transactional accuracy and prevent silent data corruption.",
    tools: ["SQL", "MySQL Workbench", "PostgreSQL / pgAdmin", "DBeaver"],
    highlights: [
      "SQL queries verifying record state mutations",
      "Data consistency cross-referencing between UI and DB",
      "Database constraint & primary/foreign key validation"
    ]
  }
];

export const devProjects = [
  {
    title: "Student Management System",
    company: "Smart Sigma",
    role: "React Front-End Developer",
    tech: ["React.js", "REST APIs", "Tailwind CSS", "JavaScript ES6"],
    description: "Engineered core modules of an enterprise educational platform with role-based dashboard rendering, multi-step registration, real-time validation, and protected routes.",
    testingRelevance: "Gave direct insight into how complex form states, token-based authentication, and dynamic API caching fail in real-world environments."
  },
  {
    title: "Full-Stack Production Platform",
    company: "Freelance",
    role: "Full-Stack Developer",
    tech: ["React.js", "Laravel", "Inertia.js", "Tailwind CSS", "MySQL"],
    description: "Rebuilt and deployed a complete production web application with client-facing interface and a role-based admin dashboard with granular permissions.",
    testingRelevance: "Instilled end-to-end ownership from database schema design through server deployment on cPanel, understanding failure points across the stack."
  },
  {
    title: "Business Portal & Admin System",
    company: "Freelance",
    role: "Laravel Developer",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade"],
    description: "Created a full business web application with administrative control panel, secure authentication, file upload processing, and server-side CRUD modules.",
    testingRelevance: "Mastered server-side validations, database transactions, CSRF protections, and edge-case handling on user input."
  }
];

export const certifications = [
  {
    id: "mahara-tech-testing",
    title: "Introduction to Software Testing Concepts & Techniques",
    issuer: "Mahara-Tech",
    badge: "Verified Credential",
    badgeColor: "emerald",
    date: "Completed",
    description: "Foundational certification covering the fundamental principles of software quality assurance, software testing life cycle (STLC), defect life cycle, and testing techniques.",
    topics: [
      "Fundamentals of Software Testing",
      "Software Testing Life Cycle (STLC)",
      "Bug Reporting & Defect Severity",
      "Black-box Testing Techniques",
      "Static vs. Dynamic Testing"
    ]
  },
  {
    id: "istqb-ctfl",
    title: "ISTQB Certified Tester Foundation Level (CTFL v4.0)",
    issuer: "ISTQB / DEPI Training Program",
    badge: "In Progress / Target 2026",
    badgeColor: "amber",
    date: "In Training (DEPI)",
    description: "Currently preparing and studying the ISTQB CTFL v4 curriculum as part of the Ministry of Communications and Information Technology (DEPI) program.",
    topics: [
      "Fundamentals of Testing",
      "Testing Throughout the SDLC",
      "Static Testing",
      "Test Analysis and Design",
      "Managing the Test Activities",
      "Test Tools"
    ]
  }
];
