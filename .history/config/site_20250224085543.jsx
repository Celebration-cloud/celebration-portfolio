const portfolio_1 = "/Screenshot 2023-08-24 110530.png";
const portfolio_2 = "/Screenshot 2023-10-29 175248.png";
const portfolio_3 = "/Screenshot 2023-10-29 174433.png";
const portfolio_4 = "/Screenshot 2023-11-23 184715.png";
const portfolio_5 = "/Screenshot 2024-01-15 075712.png";
const portfolio_6 = "/image.png";

export const siteConfig = {
  name: "Celebration Ojingulu Portfolio",
  description:
    "Showcasing the portfolio of Celebration Ojingulu, featuring beautiful and professional websites created with a focus on design and functionality. Explore projects, skills, and contact information.",
  keywords: [
    "Celebration Ojingulu",
    "Portfolio",
    "Web Development",
    "Web Design",
    "Professional Websites",
    "Projects",
    "Skills",
    "Frontend Developer",
    "Backend Developer",
  ],
  author: "Celebration Ojingulu",
  url: "https://www.celebration-portfolio.com",
  image: "/portfolio-banner.jpg",
  twitterUsername: "@celebrationojingulu",
  navItems: [
    {
      label: "Home",
      href: "#scrollspyHeading1",
    },
    {
      label: "About",
      href: "#scrollspyHeading2",
    },
    {
      label: "Service",
      href: "#scrollspyHeading3",
    },
    {
      label: "Experience",
      href: "#scrollspyHeading4",
    },
    {
      label: "Portfolio",
      href: "#scrollspyHeading5",
    },
    {
      label: "Contact",
      href: "#scrollspyHeading6",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
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
  skills: [
    { label: "Frontend Frameworks: React.js, Next.js", grade: "80%" },
    {
      label: "Styling & Animations: Tailwind CSS, Framer Motion",
      grade: "80%",
    },
    {
      label: "Core Web Technologies: HTML5, CSS3, JavaScript (ES6+)",
      grade: "80%",
    },
    { label: "Version Control: Git, GitHub", grade: "70%" },
    {
      label: "Performance & Optimization: SEO, Responsive Design",
      grade: "90%",
    },
    {
      label:
        " Collaboration & Tools: Agile Methodologies, Cross-Team Collaboration",
      grade: "80%",
    },
    { label: "Problem-solving", grade: "90%" },
    { label: "Good Communication", grade: "90%" },
  ],
  skillLogo: [
    { label: "React.js", src: "/react-logo.png" },
    { label: "Next.js", src: "/nextjs-logo.png" },
    { label: "Tailwind CSS", src: "/tailwindcss-logo.png" },
    // { label: "Framer Motion", src: "/framer-motion-logo.png" },
    { label: "HTML5", src: "/html5-logo.png" },
    { label: "CSS3", src: "/css3-logo.png" },
    { label: "JavaScript", src: "/javascript-logo.png" },
    { label: "Git", src: "/git-logo.png" },
    { label: "GitHub", src: "/github-logo.png" },
    { label: "GitHub", src: "/redux-logo.png" },
  ],
  experience: [
    {
      company: "GIIT Africa",
      title: "Web Development Intern",
      date: "Jan 2021 - Sep 2023",
      description: [
        `Developed responsive websites using HTML, CSS, and JavaScript, improving
      cross-browser compatibility and user accessibility.`,
        ` Collaborated with senior developers to implement SEO strategies, driving a
      15% increase in organic traffic.`,
        `Created comprehensive documentation for web projects, streamlining team
      workflows and enhancing project clarity.`,
        `Actively participated in daily stand-ups and sprint planning, improving
      project efficiency and on-time delivery.`,
      ],
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
    },
    {
      company: "GIIT Africa",
      title: "Front-End Developer Intern",
      date: "Jun 2020 - Dec 2020",
      description: [
        `Built and optimized web applications using React.js and Next.js, enhancing
      load speeds and user satisfaction.`,
        `Designed and implemented secure authentication systems with Firebase,
      increasing application security by 30%.`,
        `Collaborated with designers to integrate Tailwind CSS, delivering
      consistent and visually appealing UI components.`,
        ` Utilized Framer Motion to create interactive animations, improving user
      engagement by 20%.`,
        `Conducted code reviews and adhered to agile development practices,
      maintaining high-quality standards.`,
      ],
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
    },
  ],
  portfolio: [
    {
      title: "Country Search api",
      image: portfolio_1,
      description: "Ability to search for any country.",
      href: "https://country-search-vhrj.onrender.com/",
    },
    {
      title: "E-commerce Product Page",
      image: portfolio_2,
      description: "Ability to put items to cart and delete them.",
      href: "https://e-commerce-product-page-t3zp.onrender.com/",
    },
    {
      title: "Trip Add To List ",
      image: portfolio_3,
      description:
        "Ability to add items to the list, cross check, filter and delete them. With statistics included",
      href: "https://trip-add-to-list.onrender.com",
    },
    {
      title: "React Quiz",
      image: portfolio_4,
      description: "A quiz app",
      href: "https://react-quiz-d5oy.onrender.com/",
    },
    {
      title: "T0-Do List",
      image: portfolio_5,
      description: "A To-Do List site",
      href: "https://to-do-list-topaz-psi-72.vercel.app/",
    },
    {
      title: "Calcu",
      image: portfolio_5,
      description: "A To-Do List site",
      href: "https://to-do-list-topaz-psi-72.vercel.app/",
    },
  ],
};
