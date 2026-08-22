import manuelMainPortrait from '../assets/images/manuel-main-portrait.jpg';

export const PERSONAL_DATA = {
  name: "MANUEL GOMES",
  role: "AI Developer, Web Developer & Aspiring Entrepreneur",
  status: "Currently building & learning",
  heroHeadline: "I build ideas into digital products.",
  heroSubheadline: "I'm Manuel — a developer focused on AI, web applications, data, and digital experiences.",
  aboutHeadline: "More than just code.",
  aboutBio1: "I'm Manuel, a BCA (Honours) student specializing in Data Science and Artificial Intelligence. I'm passionate about building useful digital products, experimenting with AI, designing modern interfaces, and turning ideas into functional applications.",
  aboutBio2: "I'm constantly learning, building, experimenting, and looking for ways to turn technology into something people can actually use.",
  aboutTags: ["Developer", "AI Explorer", "Data Science Student", "Builder", "Designer", "Entrepreneur"],
  
  images: {
    hero: manuelMainPortrait,
    about: null,
    break: null,
    gallery: [
      { id: 1, caption: "BUILDING", aspect: "aspect-[4/5]" },
      { id: 2, caption: "LEARNING", aspect: "aspect-[5/4]" },
      { id: 3, caption: "EXPLORING", aspect: "aspect-[3/4]" },
      { id: 4, caption: "CREATING", aspect: "aspect-square" }
    ]
  },

  education: {
    institution: "Techno India University",
    degree: "Bachelor of Computer Applications (Honours) — Data Science & Artificial Intelligence",
    status: "Currently Pursuing",
    description: "A technology-focused undergraduate program developing a strong foundation in software development, data science, artificial intelligence, programming, and problem-solving.",
    focusAreas: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Programming",
      "Software Development",
      "Web Development",
      "Database Management",
      "Data Analytics"
    ]
  },

  skills: [
    {
      category: "Development",
      items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "PWA"]
    },
    {
      category: "AI & Data",
      items: ["Google Gemini", "Generative AI", "AI Integration", "Data Science", "Machine Learning", "Data Analytics"]
    },
    {
      category: "Programming",
      items: ["Python", "Java", "SQL"]
    },
    {
      category: "Design",
      items: ["UI/UX", "Responsive Design", "Product Design"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Rapid Prototyping"]
    }
  ],

  projects: [
    {
      id: "scholarmatch-ai",
      title: "ScholarMatch AI",
      tagline: "AI-powered scholarship, internship & competition eligibility analyzer",
      description: "An intelligent platform that analyzes student profiles against opportunities and produces eligibility verdicts, explanations, match percentages, and actionable recommendations.",
      highlights: [
        "Automated profile matching using Gemini AI LLM embeddings",
        "Clear eligibility breakdowns & requirement gaps",
        "Actionable improvement plans for students to boost admission chances",
        "Responsive dark-mode UI with instant criteria filtering"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Gemini AI"],
      featured: true,
      category: "AI Platform"
    },
    {
      id: "gym-live",
      title: "Gym Live",
      tagline: "Fitness & habit tracking application",
      description: "A modern fitness application for tracking habits, workouts, weight, progress and analytics with an installable PWA interface.",
      highlights: [
        "Progressive Web App (PWA) with offline habit tracking",
        "Interactive Chart.js visualizations for workout metrics",
        "Custom routine builder & streak system",
        "Fast local-storage syncing & mobile-first UI"
      ],
      tech: ["JavaScript", "HTML", "CSS", "PWA", "Chart.js"],
      featured: true,
      category: "Web Application"
    },
    {
      id: "custom-business-websites",
      title: "Custom Business Websites",
      tagline: "High-converting digital presence for modern local brands",
      description: "Showcase of high-converting, custom-designed websites engineered for gyms, barbershops, roofers, pet groomers, and service-based local businesses.",
      highlights: [
        "Modern UI tailored to individual brand aesthetics",
        "100% Mobile responsive & lighting-fast performance",
        "Conversion-focused layouts & integrated booking/contact flows",
        "SEO optimized architecture with modern typography"
      ],
      clientTypes: ["Gyms", "Barbers", "Roofers", "Pet Groomers", "Local Businesses"],
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
      category: "Client Solutions"
    }
  ],

  services: [
    {
      title: "Custom Websites",
      description: "Modern websites designed around a business's brand and conversion goals."
    },
    {
      title: "Landing Pages",
      description: "High-converting pages optimized for products, campaigns, and service offerings."
    },
    {
      title: "AI-Powered Applications",
      description: "Applications leveraging state-of-the-art AI models and intelligent APIs."
    },
    {
      title: "UI/UX Design",
      description: "Clean, intuitive, and visually compelling digital user experiences."
    },
    {
      title: "AI Integration",
      description: "Embed modern AI capabilities, LLMs, and automation into existing software."
    },
    {
      title: "PWA Development",
      description: "Fast, installable web applications that deliver native mobile app performance."
    }
  ],

  process: [
    {
      step: "01",
      title: "Discover",
      description: "Understand the core idea, market opportunity, and target audience problem."
    },
    {
      step: "02",
      title: "Design",
      description: "Craft the minimal visual direction, editorial layout, and interactive UX."
    },
    {
      step: "03",
      title: "Build",
      description: "Engineer the concept into a production-grade, responsive digital product."
    },
    {
      step: "04",
      title: "Launch",
      description: "Rigorous testing, performance optimization, and seamless deployment."
    }
  ],

  currentlyLearning: [
    "Data Science",
    "AI / ML",
    "Advanced React",
    "Backend Development",
    "Cloud Technologies",
    "System Design"
  ],

  stats: [
    { label: "Projects Built", value: "15+", detail: "Full-stack apps & client sites" },
    { label: "Technologies Explored", value: "20+", detail: "Modern frameworks & tools" },
    { label: "AI Experiments", value: "10+", detail: "Gemini & LLM integrations" },
    { label: "Currently Learning", value: "Daily", detail: "Data Science & System Architecture" }
  ],

  contact: {
    headline: "Have an idea? Let's build it.",
    text: "Whether you have a project idea, need a website, or simply want to connect — I'd love to hear from you.",
    email: "manuelgomes.dev@gmail.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  }
};
