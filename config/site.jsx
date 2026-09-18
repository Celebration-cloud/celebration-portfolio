const portfolio_1 = "/Screenshot 2023-08-24 110530.png";
const portfolio_2 = "/Screenshot 2023-10-29 175248.png";
const portfolio_3 = "/Screenshot 2023-10-29 174433.png";
const portfolio_4 = "/Screenshot 2023-11-23 184715.png";
const portfolio_5 = "/Screenshot 2024-01-15 075712.png";
const portfolio_6 = "/image.png";
const portfolio_7 = "/Screenshot 2025-02-24 090248.png";
const portfolio_8 = "/Screenshot 2025-02-24 091102.png";
const portfolio_9 = "/Screenshot 2025-02-24 091509.png";
const portfolio_10 = "/Screenshot 2025-10-20 011844.png";
const portfolio_11 = "/Screenshot 2025-10-20 093155.png";
const portfolio_12 = "/Adesa-hq.png";
const portfolio_13 = "/Linkcon_rent.png"; // TODO: add /public/Linkcon_rent.png
const portfolio_14 = "/Yungola-transport.png";
const portfolio_15 = "/Yungola-build-and-design.png";
const portfolio_16 = "/Adesa-energy.png";
const portfolio_17 = "/Fabtops.png";
const portfolio_18 = "/Adesa-media.png";


export const siteConfig = {
  name: "Celebration Ojingulu Portfolio",
  description:
    "Portfolio of Celebration Ojingulu, showcasing web development projects, IT skills, and professional experience.",
  keywords: [
    "Celebration Ojingulu",
    "Portfolio",
    "Web Development",
    "IT Support",
    "Excel",
    "Next.js",
    "Tailwind CSS",
  ],
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  author: "Celebration Ojingulu",
  url: "https://celebration-portfolio.vercel.app",
  image: "/portfolio-banner.jpg",
  twitterUsername: "@celebrationojingulu",

  about: {
    name: "Celebration Ojingulu Ifechukwudeni",
    title: "Front-End Developer",
    contact: {
      email: "ojinguluc@gmail.com",
      phone: "+44 7344 388286",
      address: "Heywood, Manchester, UK",
      location: "Hybrid / Remote",
      rightToWork: "Right to Work in the UK: Yes",
      portfolio: "https://celebration-portfolio.vercel.app",
      github: "https://github.com/Celebration-cloud",
      githubWork: "https://github.com/Celebration-Adesa-HQ",
    },
    summary: [
      "Front-end developer with hands-on production experience in React, Next.js (SSR, SSG, ISR), TypeScript and Tailwind CSS, plus a background in IT support and data analysis.",
      "Reduced page load times by 30% and boosted engagement by 20% on live projects. Comfortable across the full front-end workflow: building, debugging, and shipping responsive, SEO-optimised web apps using Git-based collaboration.",
      "Proficient in cross-browser testing, CMS integration, Microsoft 365 administration, and advanced Excel analysis (PivotTables and formulas).",
    ],
  },

  skills: [
    {
      label: "Front-End Development",
      tools: [
        "React",
        "Next.js (SSR, SSG, ISR)",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      label: "Architecture & Optimization",
      tools: [
        "API Routes",
        "Dynamic Routing",
        "SEO Optimization",
        "Responsive Design",
        "Cross-Browser Testing",
        "CMS Integration",
      ],
    },
    {
      label: "IT Systems & Diagnostics",
      tools: [
        "IT Support & Troubleshooting",
        "Network Diagnostics (LAN/WAN)",
        "Microsoft 365 Administration",
        "Advanced Excel (PivotTables)",
      ],
    },
    {
      label: "Workflow & Collaboration",
      tools: [
        "Git",
        "GitHub",
        "Git-Based Collaboration",
        "Vercel",
      ],
    },
  ],

  skillLogos: [
    {
      label: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      label: "CSS3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      label: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      label: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    }, // Added
    {
      label: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      label: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      label: "Tailwind",
      src: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
      label: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      label: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ],

  experience: [
    {
      company: "Adesa HQ",
      title: "Web Developer",
      date: "March 2025 – Present",
      description: [
        "Built and launched the corporate website for Adesa HQ (adesahq.com) using Next.js, TypeScript, and Tailwind CSS, cutting page load times by 30% through server-side rendering (SSR) and dynamic routing.",
        "Increased user engagement by 20% by implementing incremental static regeneration (ISR), optimised image loading, and API routes across the live site.",
        "Integrated a CMS for content management and dynamic page generation, enabling non-technical staff to publish updates without developer involvement.",
        "Resolved 15+ front-end bugs and cross-browser inconsistencies per sprint, documenting fixes using Git version control to speed up team debugging and onboarding.",
      ],
    },
    {
      company: "PalmPay Limited",
      title: "IT Service Specialist",
      date: "Jan 2024 – Feb 2025",
      description: [
        "Sustained 99% system uptime by managing Microsoft 365 accounts, mail flow, and domain configuration for 300+ users.",
        "Resolved 95% of tickets on first contact and cut backlog by 30% by streamlining the troubleshooting workflow and prioritisation process.",
        "Improved inventory accuracy by 25% by auditing and restructuring asset data in Excel using advanced formulas and PivotTables, tightening maintenance scheduling.",
        "Authored 20+ technical support documents that reduced repeat tickets by 15% and shortened new-hire ramp-up time.",
      ],
    },
    {
      company: "GIIT Africa",
      title: "IT Intern",
      date: "2020 – 2023",
      description: [
        "Diagnosed and resolved 20+ hardware/network issues per month across LAN/WAN environments, minimising downtime for 50+ staff.",
        "Supported front-end and IT infrastructure tasks in parallel, building foundational HTML/CSS/JavaScript skills later applied in production Next.js projects.",
      ],
    },
  ],

  education: [
    {
      institution: "Institut Universitaire du Benin",
      degree: "BSc, Information & Communication Technology",
      year: "2020 – 2023",
    },
    {
      institution: "Udemy",
      degree: "React, Next.js and Front-End Development",
      year: "2024",
      license: "UC-8b915820-6b25-4138-bce3-4f58d03c0085",
    },
  ],

  portfolio: [
    {
      title: "Linkcon News",
      image: portfolio_10,
      tools: "Next.js, Tailwind CSS, React",
      description: [
        "Built a news platform with real-time content management and analytics dashboards.",
        "Implemented server-side rendering and dynamic routing, reducing load times by 25%.",
        "Enhanced user engagement by optimizing images, API routes, and ISR.",
      ],
      href: "https://linkconn-news.vercel.app/",
      featured: true,
    },
    {
      title: "Sustainable Dashboard",
      image: portfolio_9,
      tools: "Next.js, Tailwind CSS",
      description: [
        "Created a sustainability dashboard for monitoring key metrics.",
        "Used dynamic data visualization to track progress and generate reports.",
        "Optimized for responsive design across devices.",
      ],
      href: "https://sustainability-dashboard-one.vercel.app/",
      featured: false,
    },
    {
      title: "Interactive Booking Form",
      image: portfolio_8,
      tools: "Next.js, React",
      description: [
        "Developed an interactive booking form with validation and dynamic updates.",
        "Integrated user-friendly UI components with Tailwind CSS.",
        "Reduced booking errors and improved submission efficiency.",
      ],
      href: "https://interactive-booking-form.vercel.app/",
      featured: false,
    },
    {
      title: "Country Search API",
      image: portfolio_1,
      tools: "React.js, REST API",
      description: [
        "Built a searchable country info platform using React and REST APIs.",
        "Implemented dynamic filtering and responsive layouts for better UX.",
        "Improved data load performance by optimizing API calls.",
      ],
      href: "https://country-search-vhrj.onrender.com/",
      featured: false,
    },
    {
      title: "E-commerce Product Page",
      image: portfolio_2,
      tools: "React.js, CSS",
      description: [
        "Created an e-commerce product page with add-to-cart and delete features.",
        "Ensured cross-browser compatibility and responsive design.",
        "Enhanced UI/UX through clean layout and interactive components.",
      ],
      href: "https://e-commerce-product-page-t3zp.onrender.com/",
      featured: false,
    },
    {
      title: "Trip Add To List",
      image: portfolio_3,
      tools: "React.js, CSS",
      description: [
        "Developed a trip list management app with add, delete, and filter functions.",
        "Included statistics and summary features to track trips effectively.",
        "Optimized performance and responsiveness across devices.",
      ],
      href: "https://trip-add-to-list.onrender.com/",
      featured: false,
    },
    {
      title: "React Quiz",
      image: portfolio_4,
      tools: "React.js",
      description: [
        "Built a quiz app with interactive questions and score tracking.",
        "Implemented state management for smooth user experience.",
        "Enhanced engagement through animations and instant feedback.",
      ],
      href: "https://react-quiz-d5oy.onrender.com/",
      featured: false,
    },
    {
      title: "To-Do List",
      image: portfolio_5,
      tools: "React.js, CSS",
      description: [
        "Created a To-Do List app with add, delete, and cross-check functionalities.",
        "Included task filtering and statistics for user convenience.",
        "Designed a responsive interface with clean UX.",
      ],
      href: "https://to-do-list-topaz-psi-72.vercel.app/",
      featured: false,
    },
    {
      title: "Calculator",
      image: portfolio_6,
      tools: "React.js",
      description: [
        "Built a responsive calculator web app with clean UI.",
        "Optimized for mobile and desktop usage.",
        "Tested for accurate calculations and user-friendly experience.",
      ],
      href: "https://celebration-calculator.onrender.com/",
      featured: false,
    },
    {
      title: "E-commerce Website",
      image: portfolio_7,
      tools: "React.js, CSS",
      description: [
        "Developed a full e-commerce website with product catalog and shopping cart.",
        "Implemented responsive design and cross-browser support.",
        "Improved user engagement and checkout efficiency.",
      ],
      href: "https://folakits.onrender.com/",
      featured: false,
    },
    {
      title: "Linkcon - E-commerce Website",
      image: portfolio_11, // add your image import for Linkcon here
      tools: "Next.js, React, Tailwind CSS, Stripe",
      description: [
        "Developed a modern e-commerce platform with responsive design and smooth navigation.",
        "Integrated Stripe for secure payments and Clerk for authentication.",
        "Implemented dark/light mode, wishlist, cart, and speed dial navigation.",
        "Optimized performance and SEO for fast, discoverable pages.",
      ],
      href: "https://linkcon-web.vercel.app/",
      featured: true,
    },
    {
      title: "Adesa HQ",
      image: portfolio_12,
      tools: "Next.js, React, TypeScript, Tailwind CSS",
      description: [
        "Corporate website for Adesa HQ with responsive design and SEO optimization.",
        "Implemented SSR, dynamic routing, and performance optimization strategies.",
        "Integrated CMS for content management and dynamic page generation.",
      ],
      href: "https://www.adesahq.com/",
      featured: true,
    },
    {
      title: "Linkcon-Rent",
      image: portfolio_13,
      tools: "Next.js, React, TypeScript, Tailwind CSS",
      description: [
        "Built a verified property rental platform for Nigeria — connecting renters directly with landlords, no agents or hidden fees.",
        "Implemented map-based property search, neighbourhood filtering, and a transparent move-in cost breakdown showing every charge by name.",
        "Integrated a two-party viewing confirmation flow, reusable renter profiles, digital lease signing, and Paystack-secured rent payments.",
      ],
      href: "https://linkconn-rent.vercel.app/",
      featured: true,
    },
    {
      title: "Yungola Transport",
      image: portfolio_14,
      tools: "Next.js, Tailwind CSS, Vercel Analytics",
      description: [
        "Transportation company website with service showcase and contact integration.",
        "Optimized for Core Web Vitals and mobile-first responsive design.",
        "Implemented Vercel Analytics for performance monitoring.",
      ],
      href: "https://yungola-transport.vercel.app/",
      featured: true,
    },
    {
      title: "Yungola Build & Design",
      image: portfolio_15,
      tools: "Next.js, React, Tailwind CSS",
      description: [
        "Construction and design company portfolio with project gallery.",
        "Built hero slider, featured projects section, and services grid.",
        "Implemented image optimization and lazy loading for performance.",
      ],
      href: "https://yungola-build-and-design.vercel.app/",
      featured: true,
    },
    {
      title: "Adesa Energy",
      image: portfolio_16,
      tools: "Next.js, TypeScript, Tailwind CSS",
      description: [
        "Energy sector corporate website with modern design patterns.",
        "Focused on accessibility and cross-browser compatibility.",
        "Implemented dynamic content sections and contact forms.",
      ],
      href: "https://adesa-energy.vercel.app/",
      featured: true,
    },
    {
      title: "Fabtops",
      image: portfolio_17,
      tools: "Next.js, React, Tailwind CSS, Stripe",
      description: [
        "E-commerce platform with full shopping cart and wishlist functionality.",
        "Integrated Stripe for secure payment processing.",
        "Built account management system and editorial content pages.",
      ],
      href: "https://fabtops.vercel.app/",
      featured: true,
    },
    {
      title: "Adesa Media",
      image: portfolio_18,
      tools: "Next.js, React, Sanity CMS",
      description: [
        "Media and content platform with dynamic page routing.",
        "Integrated Sanity CMS for content management.",
        "Built adventure pages and media gallery modules.",
      ],
      href: "https://adesa-media.vercel.app/",
      featured: true,
    },
  ],
  links: {
    github: "https://github.com/Celebration-cloud",
    githubWork: "https://github.com/Celebration-Adesa-HQ",
    portfolio: "https://celebration-portfolio.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://celebration-portfolio.vercel.app",
    title: "Celebration Ojingulu Portfolio",
    description:
      "Portfolio of Celebration Ojingulu — Front-End Developer based in Heywood, Manchester, UK. Building modern web apps with Next.js, React, and TypeScript.",
    image: "/portfolio-banner.jpg",
    site_name: "Celebration Ojingulu Portfolio",
  },
  twitter: {
    handle: "@celebrationojingulu",
    site: "@celebrationojingulu",
    cardType: "summary_large_image",
  },
  additional: {
    languages: ["English"],
    rightToWorkUK: "Yes",
  },
};
