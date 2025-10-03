const navLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Testimonials", link: "#testimonials" },
];

const heroContent = {
  backgroundImage: "/images/bg.png",
  leadingLine: "Engineering",
  trailingLines: ["analytics-driven platforms", "that stay resilient"],
  description:
    "Hi, I’m Utkarsh Verma — SDE Intern at Terrabiz Tech and Cybersecurity Head at MMMUT, crafting secure dashboards and immersive digital products.",
  ctaText: "Explore My Work",
};

const words = [
  { text: "SDE Intern", imgPath: "/images/code.svg" },
  { text: "Full-Stack", imgPath: "/images/code.svg" },
  { text: "Cybersecurity", imgPath: "/images/ideas.svg" },
  { text: "Cloud", imgPath: "/images/concepts.svg" },
  { text: "Automation", imgPath: "/images/designs.svg" },
  { text: "UI/UX", imgPath: "/images/designs.svg" },
  { text: "Analytics", imgPath: "/images/concepts.svg" },
  { text: "Resilience", imgPath: "/images/ideas.svg" },
];

const aboutContent = {
  title: "About Me",
  focusAreas: [
    "Full-Stack Engineering",
    "Cloud & DevOps Automation",
    "Cybersecurity Operations",
    "Data Visualization & UX",
  ],
  description:
    "As an SDE Intern at Terrabiz Tech and Cybersecurity Head at MMMUT’s Computer Engineering Society, I ship analytics-first web apps and resilient cloud platforms that keep users engaged and secure.",
  highlights: [
    "Delivering a React + Tailwind + Chart.js admin panel with real-time REST analytics at Terrabiz Tech.",
    "Hardening Azure-hosted CTF infrastructure with Cloudflare, Dockerized challenges, and proactive monitoring.",
    "Mentoring peers through 300+ DSA solutions and orchestrating campus HackerRank competitions end-to-end.",
  ],
  skills: [
    "Java",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Azure",
    "AWS",
    "Docker",
  ],
  stats: [
    { value: "300+", label: "DSA & CP Problems Solved" },
    { value: "4", label: "Production Deployments (Web & Cloud)" },
    { value: "5+", label: "Tech Events & Workshops Led" },
  ],
  primaryCta: { text: "Let’s build something", href: "#contact" },
  secondaryCta: { text: "Download CV", href: "#" },
  corePhilosophyLabel: "Core Philosophy",
  corePhilosophyStatement:
    "Ship experiences that balance data clarity, security, and human-centered design.",
  quote:
    "“Great products earn trust when analytics, automation, and empathy move in sync. That balance is what I chase with every build.”",
};

const counterItems = [
  { value: 1, suffix: "+", label: "Years Building SaaS Dashboards" },
  { value: 300, suffix: "+", label: "DSA & CP Problems Solved" },
  { value: 4, suffix: "+", label: "End-to-End Platforms Launched" },
  { value: 5, suffix: "+", label: "Campus Tech Events Organized" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Security-First Delivery",
    desc: "Embedding Cloudflare, JWT, and monitoring pipelines so every release stays resilient.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Data-Driven Storytelling",
    desc: "Translating complex metrics into intuitive dashboards with Chart.js and React.",
  },
  {
    imgPath: "/images/time.png",
    title: "Automation Obsessed",
    desc: "Leveraging Docker, cron jobs, and CI workflows to streamline deployments and alerts.",
  },
];

const certificateItems = [
  {
    title: "Getting Started with Competitive Programming | NPTEL",
    description:
      "Explored algorithmic paradigms, complexity analysis, and competitive programming workflows through intensive assignments.",
    imgPath: "/images/exp1.png",
    link: "https://nptel.ac.in/",
  },
  {
    title: "Introduction to Machine Learning | NPTEL",
    description:
      "Studied supervised and unsupervised learning techniques with practical labs on model evaluation and deployment considerations.",
    imgPath: "/images/exp2.png",
    link: "https://nptel.ac.in/",
  },
  {
    title: "AWS Cloud Practitioner Exam Prep | GeeksforGeeks",
    description:
      "Gained foundational AWS architecture knowledge, cloud economics, and operational best practices for practitioner certification.",
    imgPath: "/images/exp3.png",
    link: "https://www.geeksforgeeks.org/",
  },
  {
    title: "AWS Solutions Architect Associate Prep | GeeksforGeeks",
    description:
      "Deepened expertise in designing highly available, cost-optimized AWS architectures aligned with SAA exam blueprints.",
    imgPath: "/images/exp1.png",
    link: "https://www.geeksforgeeks.org/",
  },
];

const techStackImgs = [
  { name: "MERN & Next.js", imgPath: "/images/logos/react.png" },
  { name: "Node.js & Express APIs", imgPath: "/images/logos/node.png" },
  { name: "Cloud & Security", imgPath: "/images/logos/three.png" },
  { name: "Automation & DevOps", imgPath: "/images/logos/git.svg" },
  { name: "Python & Data Scripts", imgPath: "/images/logos/python.svg" },
];

const techStackIcons = [
  {
    name: "MERN & Next.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js & Express",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Cloud & Security",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Automation & DevOps",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Python & Data Scripts",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Owning the Terrabiz admin panel sprint taught me how to translate business KPIs into polished, production-ready dashboards.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "SDE Intern – Terrabiz Tech Pvt. Ltd.",
    date: "August 2025 – Present",
    responsibilities: [
      "Developing a scalable admin panel with React, Tailwind CSS, Chart.js, and secured REST APIs for real-time analytics.",
      "Designing Node.js + Express services on MongoDB Atlas with aggregation pipelines for actionable insights.",
      "Automating email workflows and daily statistical reports using Firebase, Multer, cron jobs, and Mailgun integrations.",
    ],
  },
  {
    review:
      "Leading MMMUT’s cybersecurity initiatives keeps me grounded in secure deployment practices and collaborative learning.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Cybersecurity Head – Computer Engineering Society",
    date: "January 2024 – Present",
    responsibilities: [
      "Led an Azure-hosted CTF platform protected by Cloudflare with Dockerized cryptography challenges.",
      "Developed Linux and Python-based problem sets while wiring automated alerts through Azure Monitor.",
      "Ran HackerRank competitions covering problem design, test case management, and live event operations.",
    ],
  },
  {
    review:
      "Building StayVista and ThoughtTag sharpened my ability to balance usability, security, and performance in consumer-facing products.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Product Developer – StayVista & ThoughtTag",
    date: "2023 – 2024",
    responsibilities: [
      "Shipped StayVista, a MERN reservation platform with JWT auth, calendar bookings, and MongoDB Atlas persistence.",
      "Engineered ThoughtTag, a Manifest v3 Chrome extension with offline sticky notes, customization, and JSON exports.",
      "Created reusable React hooks, Context-based state, and polished UI systems for consistent user journeys.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const projectShowcase = {
  title: "Projects",
  primaryProject: {
    title: "StayVista – Seamless Hotel Reservations",
    description:
      "MERN-based travel platform with JWT-secured auth, dynamic calendar bookings, and MongoDB Atlas persistence.",
    imgPath: "/images/project1.png",
    alt: "StayVista booking dashboard",
  },
  secondaryProjects: [
    {
      title: "Terrabiz Admin Analytics Platform",
      imgPath: "/images/project2.png",
      alt: "Terrabiz admin dashboard",
      backgroundClass: "bg-[#FFEFDB]",
    },
    {
      title: "ThoughtTag – Smart Sticky Notes",
      imgPath: "/images/project3.png",
      alt: "ThoughtTag Chrome extension",
      backgroundClass: "bg-[#FFE7EB]",
    },
  ],
};

const educationCards = [
  {
    review:
      "Pursuing a rigorous Computer Science curriculum that blends secure systems, full-stack engineering, and real-time applications.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "B.Tech | Computer Science & Engineering",
    institution:
      "Madan Mohan Malaviya University of Technology, Gorakhpur",
    date: "2022 – 2026 | CGPA: 8.33/10",
    highlights: [
      "Cybersecurity Head for the Computer Engineering Society, leading cloud-native initiatives.",
      "Built MERN stack, cloud, and automation projects focused on reliability and UX.",
      "Active in competitive programming, solving 300+ DSA problems across platforms.",
    ],
  },
  {
    review:
      "Strengthened analytical thinking and foundational sciences while finishing among the top performers of the district.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Class XII | CBSE",
    institution: "Lucknow Public School, Sitapur (U.P.)",
    date: "2021 | Score: 92.8%",
    highlights: [
      "Excelled in mathematics and computer science coursework with leadership in science clubs.",
      "Mentored peers for board examinations and technical competitions.",
      "Represented the school in inter-school tech and innovation events.",
    ],
  },
  {
    review:
      "Laid the groundwork for disciplined problem-solving, communication, and teamwork as the district topper.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Class X | ICSE",
    institution: "Seniors Radiant Academy, Sitapur (U.P.)",
    date: "2019 | Score: 95%",
    highlights: [
      "Recognized as the district topper for academic excellence across subjects.",
      "Participated in robotics, quizzes, and cultural initiatives that honed leadership skills.",
      "Built early interest in computing, hardware, and ethical hacking.",
    ],
  },
];

const testimonials = [
  {
    name: "Product Manager",
    mentions: "Terrabiz Tech Pvt. Ltd.",
    review:
      "Utkarsh quickly connected our KPIs to a beautiful, reliable admin panel. His ownership across frontend, backend, and automation has accelerated our release cycle.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Society President",
    mentions: "Computer Engineering Society",
    review:
      "Our CTF platform now runs like clockwork. Utkarsh’s Cloudflare hardening, Dockerized labs, and monitoring pipelines keep every event resilient and fun.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Faculty Advisor",
    mentions: "Department of Computer Science",
    review:
      "Utkarsh brings curiosity and discipline to every initiative—whether it’s guiding HackerRank contests or mentoring juniors on system design and DSA.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/insta.png",
    url: "https://github.com/utkarsh96verma",
  },
  {
    name: "email",
    imgPath: "/images/fb.png",
    url: "mailto:utkarsh96verma@gmail.com",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/",
  },
];

const experienceContent = {
  title: "Leadership & Project Experience",
  sub: "💼 From internship sprints to campus-wide security initiatives",
};

const educationContent = {
  title: "Education",
  sub: "🎓 Academic foundation & continuous learning",
  certificatesTitle: "Certificates & Achievements",
};

const techStackContent = {
  title: "How I Can Contribute & My Key Skills",
  sub: "🤝 Secure, data-rich, and user-focused engineering",
};

const testimonialsContent = {
  title: "What Collaborators Say",
  sub: "⭐️ Feedback from mentors & peers",
};

const contactContent = {
  title: "Let’s Collaborate",
  sub: "📬 Reach out at utkarsh96verma@gmail.com | +91 9580071141",
  badgeClassName: "bg-white/10 border border-white/20 text-white",
  className: "pt-16",
};

const footerContent = {
  termsText: "Terms & Conditions",
  owner: "Utkarsh Verma",
  rightsText: "All rights reserved.",
};

export {
  heroContent,
  words,
  aboutContent,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  educationCards,
  certificateItems,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projectShowcase,
  experienceContent,
  educationContent,
  techStackContent,
  testimonialsContent,
  contactContent,
  footerContent,
};
