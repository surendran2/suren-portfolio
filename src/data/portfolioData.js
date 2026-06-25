export const portfolioData = {
  personalInfo: {
    name: "Surendran I",
    title: "Senior Full Stack Developer & Prompt Engineer",
    tagline: "Building high-performance, scalable web and mobile ecosystems at the intersection of robust backend architecture and premium UI/UX.",
    bio: "Results-driven Full Stack Developer with 4+ years of experience architecting and delivering scalable enterprise web and mobile applications. Proven track record of improving system performance by up to 60%, reducing manual errors by 60%, and accelerating order processing by 35% through clean architecture and workflow automation. Experienced Prompt Engineer leveraging AI tools to accelerate development velocity in Agile environments.",
    email: "isurendran777@gmail.com",
    phone: "+91 93611 49796",
    location: "Tamil Nadu, India",
    resumeUrl: "#", // Placeholder where the user can link their resume file
    socials: {
      github: "https://github.com", // Add exact GitHub link if known or placeholder
      linkedin: "https://linkedin.com/in/surendran-i",
      email: "mailto:isurendran777@gmail.com"
    },
    stats: [
      { label: "Years of Experience", value: 4 },
      { label: "Enterprise Projects Delivered", value: 8 },
      { label: "Performance Speedup", value: 60, suffix: "%" },
      { label: "Manual Errors Reduced", value: 60, suffix: "%" }
    ]
  },
  
  skills: {
    Frontend: [
      { name: "React.js / Next.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS & CSS3", level: 90 },
      { name: "Angular", level: 80 },
      { name: "Ionic Framework", level: 85 },
      { name: "HTML5 & DOM API", level: 90 },
      { name: "TypeScript (Basic)", level: 75 }
    ],
    Backend: [
      { name: "PHP / Laravel", level: 95 },
      { name: "CakePHP", level: 85 },
      { name: "Node.js (Express)", level: 82 },
      { name: "RESTful API Design", level: 92 },
      { name: "JWT Auth & Security", level: 90 }
    ],
    Databases: [
      { name: "MySQL (Optimization & Schema)", level: 90 },
      { name: "Stored Procedures & Indexing", level: 88 },
      { name: "Query Profiling", level: 85 }
    ],
    "Cloud & DevOps": [
      { name: "Git / GitHub Version Control", level: 92 },
      { name: "CI/CD & Release Management", level: 82 },
      { name: "Linux Administration", level: 80 },
      { name: "Docker Basics", level: 70 },
      { name: "AWS & GCP Concepts", level: 75 }
    ],
    "AI & Methodologies": [
      { name: "AI Prompt Engineering", level: 95 },
      { name: "Agile / Scrum Framework", level: 88 },
      { name: "Postman & API Testing", level: 90 },
      { name: "Vite & Tooling Build Pipelines", level: 90 }
    ]
  },
  
  experience: [
    {
      company: "Warely Technology Private Limited",
      position: "Frontend Developer & Prompt Engineer",
      duration: "Aug 2025 – Present",
      location: "Tamil Nadu, India",
      type: "Full-Time",
      description: "Leading frontend architecture and developer-facing AI prompt engineering initiatives to deliver high-performance applications with robust CI/CD automations.",
      responsibilities: [
        "Architect and deliver modern, high-performance frontend applications using React.js, Tailwind CSS, JavaScript (ES6+), HTML5, and CSS3, improving UI responsiveness and UX quality.",
        "Design and maintain a reusable UI component library that reduced new feature development time by an estimated 25%.",
        "Lead Prompt Engineering initiatives, creating, testing, and optimizing AI prompts (ChatGPT, GitHub Copilot, Gemini AI) for software development automation and internal business workflows.",
        "Own end-to-end deployment pipelines across development, staging, and production environments; coordinate release management to ensure zero-downtime.",
        "Support DevOps activities including build management, release coordination, and deployment automation using Git branching strategies (GitFlow)."
      ],
      achievements: [
        "Reduced UI implementation time by 25% through building a custom library of accessible, reusable layout elements.",
        "Accelerated sprint velocity across the frontend engineering team by introducing optimized developer prompts and AI scaffolding techniques."
      ]
    },
    {
      company: "Featec Business Solutions",
      position: "Full Stack Developer",
      duration: "Sep 2021 – Sep 2025",
      location: "Tamil Nadu, India",
      type: "Full-Time",
      description: "Designed, engineered, and shipped high-scale web and mobile enterprise-grade solutions for clients across multiple industry verticals.",
      responsibilities: [
        "Designed and delivered 8+ enterprise-grade web and mobile applications (CRM, HRM, Inventory, Order Management, Vehicle Service, POS, Ride Booking) using Laravel, CakePHP, React.js, Angular, and Ionic.",
        "Engineered and integrated 15+ RESTful APIs enabling seamless frontend-backend communication; implemented secure JWT-based authentication and third-party integrations (Razorpay, Ecom, Porter).",
        "Optimized SQL queries, indexing strategies, and application architecture, improving overall system performance by up to 40% and reducing page load times.",
        "Built reusable, accessible UI component libraries and responsive designs for both web and mobile (Ionic).",
        "Automated manual business workflows across order processing, billing, and service management systems, contributing to efficiency gains of 25–60% across client operations.",
        "Mentored junior team members on Laravel best practices, Git workflow standards, and API design principles."
      ],
      achievements: [
        "Delivered a 40% database speedup through query optimizations, index re-tuning, and cache configurations.",
        "Automated order flows which accelerated order processing speed by 35% and reduced manual entries and billing errors."
      ]
    }
  ],
  
  projects: [
    {
      title: "POS QR Ordering & Kitchen Display",
      category: "Full Stack",
      tech: ["React.js", "Laravel", "MySQL", "Bootstrap"],
      problem: "Restaurant staff manually relayed customer orders, causing 60%+ error rate and kitchen delays.",
      solution: "Engineered a QR-based digital ordering platform integrated with a POS system and real-time Kitchen Display System (KDS), enabling customers to order directly from their table.",
      outcome: "Reduced manual order errors by 60%, improved kitchen throughput, and enhanced customer satisfaction scores.",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "VVD - Order Sales Management",
      category: "Mobile & Web",
      tech: ["CakePHP", "Ionic React", "Ionic Angular", "MySQL"],
      problem: "Field sales teams lacked real-time tools for order capture, expense tracking, and analytics, causing processing delays.",
      solution: "Built an end-to-end order management platform supporting bulk order uploads and two purpose-built mobile apps—SFA App (Ionic React) for field sales and VVD Connect (Ionic Angular) for retail coupons.",
      outcome: "Improved order processing speed by 35%, increased field team productivity, and reduced manual data entry.",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "TVSFIT - Vehicle Service System",
      category: "Full Stack",
      tech: ["CakePHP", "HTML5", "CSS3", "jQuery", "Razorpay API"],
      problem: "Vehicle service centres managed GRN, billing, and payments manually, resulting in billing inaccuracies and slow transactions.",
      solution: "Developed a full-featured vehicle service lifecycle management platform with GRN, Credit Note modules, and integrated Razorpay payment gateway.",
      outcome: "Automated workflows improving service efficiency by 30% and eliminating billing discrepancies.",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Simpliapps - ERP & HRMS System",
      category: "Full Stack",
      tech: ["Angular", "Laravel", "MySQL"],
      problem: "A growing business managed HR, customer relations, and inventory across disconnected spreadsheets and manual processes.",
      solution: "Architected and delivered a unified CRM + HRM + Inventory platform with payroll automation, employee leave tracking, and real-time inventory.",
      outcome: "Improved inventory accuracy by 25%, eliminated manual data reconciliation, and centralized operations.",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1552581230-2645f2987b5e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tompang - Ride Booking App",
      category: "React / Vite",
      tech: ["React.js", "Tailwind CSS", "Laravel", "REST APIs"],
      problem: "Drivers and customers needed a simple, reliable platform to connect for ride bookings with real-time tracking.",
      solution: "Built a responsive ride booking platform with driver-customer matching, booking history, and ride tracking features using React (Vite) for optimized performance.",
      outcome: "Delivered a mobile-first UI; Vite build optimizations reduced initial load time significantly.",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Azelerator - Vehicle Spare Parts",
      category: "Mobile & Web",
      tech: ["CakePHP", "Ionic React", "Ionic Angular", "Porter API"],
      problem: "Fragmented enquiry, sales, and delivery tracking systems created operational inefficiencies for vehicle dealerships.",
      solution: "Built a finance login for vehicle enquiries, an AZEAPP mobile platform for buyer/seller operations, and AZE Sales App; integrated Ecom and Porter delivery APIs.",
      outcome: "Improved order tracking efficiency by 30% and streamlined multi-channel sales operations.",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
    }
  ],
  
  services: [
    {
      title: "Full Stack Development",
      description: "End-to-end web & mobile applications engineered using modern tech (React, Laravel, Node, Angular) focusing on scalability and speed.",
      icon: "FiCpu"
    },
    {
      title: "Laravel & PHP Development",
      description: "Robust, enterprise-grade backends with clean MVC structure, optimal database queries, Eloquent optimization, and custom packages.",
      icon: "FiServer"
    },
    {
      title: "React & Frontend Engineering",
      description: "Highly interactive client portals, stateful forms, and customized component systems utilizing Tailwind CSS, TypeScript, and modern hooks.",
      icon: "FiMonitor"
    },
    {
      title: "API Design & Integration",
      description: "Secure JWT authentications, webhook structures, and payment configurations (Razorpay, Stripe) or logistics routing integrations (Porter, Ecom).",
      icon: "FiKey"
    },
    {
      title: "Database Architecture",
      description: "Logical schema layouts, indexing strategies, query profiling, and optimization techniques that speed up page loads by up to 40%.",
      icon: "FiDatabase"
    }
  ],
  
  certifications: [
    {
      title: "B.Sc. Computer Science",
      issuer: "Nadar Mahajana Sangam S. Vellaichamy Nadar College",
      date: "2018 - 2021",
      description: "Graduated with honors. Academic excellence with a cumulative CGPA of 9.14 / 10.",
      type: "Degree"
    },
    {
      title: "Advanced Laravel & PHP Patterns",
      issuer: "Self-Study & Professional Projects",
      date: "2023",
      description: "Specialized certification in API design, microservices, and database tuning.",
      type: "Technical"
    },
    {
      title: "Frontend Engineering & React Ecosystems",
      issuer: "Self-Study / Community Training",
      date: "2024",
      description: "Comprehensive training in React Hooks, Router, Redux/Zustand, Tailwind and Web Accessibility (WCAG).",
      type: "Technical"
    },
    {
      title: "AI Prompt Engineering Specialist",
      issuer: "Warely Tech R&D Initiative",
      date: "2025",
      description: "Pioneered prompting templates and AI-driven automation tasks within standard dev workflows.",
      type: "Innovation"
    }
  ]
};
