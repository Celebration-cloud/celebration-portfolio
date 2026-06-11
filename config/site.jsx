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
  url: "https://www.celebration-portfolio.com",
  image: "/portfolio-banner.jpg",
  twitterUsername: "@celebrationojingulu",

  about: {
    name: "Celebration Ojingulu Ifechukwudeni",
    title: "Front-End Developer & IT Specialist",
    contact: {
      email: "ojinguluc@gmail.com",
      phone: "+2349014194307",
      address: "4 Prince Kosoko Kings Street",
    },
    summary: [
      "Detail-oriented and adaptable IT professional with hands-on experience in front-end web development, data analysis (Excel), and IT support.",
      "Skilled in HTML, CSS, JavaScript, Next.js, Tailwind CSS, troubleshooting, and Microsoft 365 administration.",
      "Strong communication, teamwork, and problem-solving skills to drive productivity and user satisfaction.",
    ],
  },

  skills: [
    {
      label: "Frontend Engineering",
      tools: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      label: "Styling & UI/UX",
      tools: ["Tailwind CSS", "Framer Motion", "Responsive Design", "Figma"],
    },
    {
      label: "Video & Content",
      tools: [
        "DaVinci Resolve",
        "CapCut",
        "Color Grading",
        "Audio Editing",
        "Short-form Editing",
      ],
    },
    {
      label: "Backend & CMS",
      tools: ["REST APIs", "Sanity CMS", "Firebase", "Supabase", "SQL"],
    },
    {
      label: "DevOps & Tools",
      tools: ["Git", "GitHub", "Vercel", "Postman"],
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
    {
      label: "Capcut",
      src: "/capcut-logo.svg",
    },
    {
      label: "DaVinci Resolve",
      src: "/DaVinci_Resolve_Studio.png",
    },
  ],

  experience: [
    {
      company: "Adesa HQ",
      title: "Frontend Engineer & Content Producer",
      date: "Dec 2025 – Present",
      description: [
        "Built responsive web apps with React, Next.js, TypeScript & Tailwind CSS.",
        "Developed SEO-optimized pages and improved Core Web Vitals performance.",
        "Integrated Sanity CMS, REST APIs, and dynamic content pipelines.",
        "Edited promotional videos and performed colour grading using DaVinci Resolve.",
      ],
    },
    {
      company: "PalmPay Ltd",
      title: "IT Service Specialist",
      date: "Jan 2024 – Feb 2025",
      description: [
        "Managed Microsoft 365 accounts, mail flow & domain settings — 99% uptime.",
        "Achieved 95% first-contact resolution; reduced ticket backlog by 30%.",
        "Analysed asset data in Excel; improved inventory accuracy by 25%.",
      ],
    },
    {
      company: "GIIT Africa",
      title: "IT Intern",
      date: "Jun 2022 – Aug 2023",
      description: [
        "Built SEO-friendly Next.js apps (SSR, SSG, dynamic routing) — load times ↓30%.",
        "Boosted engagement 20% via API routes, ISR and image optimisation.",
      ],
    },
  ],

  education: [
    {
      institution: "Institut Universitaire du Bénin (IUB)",
      degree: "BSc Information Technology",
      year: "2020 – 2023",
    },
    {
      institution: "Udemy",
      degree: "React, Next.js & Front-End Dev",
      year: "2024",
      license: "UC-8b915820",
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
      image: "/adesa-hq.png", // Add your screenshot
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
      title: "Yungola Transport",
      image: "/Yungola-transport.png",
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
      image: "/Yungola-build-and-design.png",
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
      image: "/Adesa-energy.png",
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
      image: "/Fabtops.png",
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
      image: "/Adesa-media.png",
      tools: "Next.js, React, Sanity CMS",
      description: [
        "Media and content platform with dynamic page routing.",
        "Integrated Sanity CMS for content management.",
        "Built adventure pages and media gallery modules.",
      ],
      href: "https://adesa-media.vercel.app/",
      featured: false,
    },
  ],
  links: {
    github: "https://github.com/Celebration-cloud",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.celebration-portfolio.com",
    title: "Celebration Ojingulu Portfolio",
    description:
      "Showcasing the portfolio of Celebration Ojingulu, featuring beautiful and professional websites created with a focus on design and functionality.",
    image: "/portfolio-banner.jpg",
    site_name: "Celebration Ojingulu Portfolio",
  },
  twitter: {
    handle: "@celebrationojingulu",
    site: "@celebrationojingulu",
    cardType: "summary_large_image",
  },

  references: [{ name: "Ojingulu Regina", contact: "+234 806 375 0779" }],
};
