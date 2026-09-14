import manuelMainPortrait from '../assets/images/manuel-main-portrait.jpg';
import manuelAboutPortrait from '../assets/images/manuel-about-portrait.jpg';
import scholarMatchImg from '../assets/images/scholarmatch-screenshot.png';
import rawFitnessImg from '../assets/images/raw-fitness-screenshot.png';

export const PERSONAL_DATA = {
  name: "MANUEL GOMES",
  role: "AI Engineer & Full-Stack Developer",
  status: "Available for Engineering Roles & AI Projects",
  location: "Kolkata, India",
  timezone: "IST (UTC+5:30)",
  availability: "Open to Full-Time, Remote & Contract Opportunities",
  heroTagline: "BCA (Honours) scholar in Data Science & Artificial Intelligence. Engineering high-performance web applications, intelligent AI pipelines, and modern user experiences.",
  
  metrics: [
    { label: "Production Apps", value: "2+" },
    { label: "Academic Specialization", value: "Data Science & AI" },
    { label: "Stack Focus", value: "React · TypeScript · AI" },
  ],

  aboutHeading: "Engineering with curiosity, precision, and purpose.",
  aboutBio: "I am a developer and BCA (Hons.) student specializing in Data Science and Artificial Intelligence. My work centers on building scalable web applications and integrating large language models to solve real-world problems. I combine robust software architecture with clean, performant interfaces designed for real users.",
  aboutTags: ["Generative AI", "Full-Stack Development", "Data Science", "System Architecture", "UI/UX Engineering"],
  
  images: {
    hero: manuelMainPortrait,
    about: manuelAboutPortrait,
  },

  resumeUrl: "https://github.com/manuelgomes2006",

  education: {
    institution: "Techno India University",
    degree: "Bachelor of Computer Applications (Honours)",
    specialization: "Data Science & Artificial Intelligence",
    period: "2024 — Present",
    status: "Active Scholar",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning & AI",
      "Database Management (SQL)",
      "Web Technologies & Systems",
      "Probability & Statistics"
    ]
  },

  skills: [
    {
      category: "AI & Intelligent Systems",
      badge: "Core Focus",
      items: ["Google Gemini API", "Prompt Engineering", "LLM Integration", "Data Science", "Machine Learning", "Python"]
    },
    {
      category: "Frontend Engineering",
      badge: "Production",
      items: ["React 18", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "Framer Motion", "HTML5 & CSS3"]
    },
    {
      category: "Backend & Systems",
      badge: "API Architecture",
      items: ["Node.js", "Express", "Vercel Serverless", "RESTful APIs", "SQL", "Java"]
    },
    {
      category: "Tools & DevOps",
      badge: "Workflow",
      items: ["Git & GitHub", "Vite", "CI/CD Deployment", "VS Code", "Responsive Architecture"]
    }
  ],

  projects: [
    {
      id: "scholarmatch-ai",
      title: "ScholarMatch AI",
      category: "AI PLATFORM",
      domainUrl: "scholarmatch.ai/evaluator",
      tagline: "Intelligent Opportunity & Eligibility Evaluation Engine",
      description: "An automated evaluation platform that parses complex student qualifications and cross-references them against global scholarships, internships, and grants using the Google Gemini API.",
      problemSolved: "Eliminates tedious manual eligibility checks by delivering rubric-grounded match percentages, verdict rationales, and actionable profile enhancement strategies in under 2 seconds.",
      highlights: [
        "Google Gemini API integration for real-time document & qualification analysis",
        "Sub-2s response pipeline generating structured JSON verdicts and improvement roadmaps",
        "Interactive scoring dashboard with granular category breakdowns"
      ],
      metrics: [
        { label: "Response Latency", value: "< 2.0s" },
        { label: "Scoring Accuracy", value: "94% Rubric Match" },
        { label: "AI Backend", value: "Gemini API" }
      ],
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Gemini AI", "Vite"],
      githubUrl: "https://github.com/manuelgomes2006/scholarmatch",
      liveUrl: "https://manuelgomes2006.github.io/scholarmatch/",
      image: scholarMatchImg
    },
    {
      id: "raw-fitness",
      title: "RAW FITNESS",
      category: "WEB APPLICATION",
      domainUrl: "rawfitness.gym/explore",
      tagline: "High-Performance Digital Presence for Premier Gym Brand",
      description: "A conversion-engineered, highly responsive web application built for a boutique fitness enterprise to showcase modern workout facilities, membership tiers, and trainer portfolios.",
      problemSolved: "Elevated the local brand with mobile-first performance, accessible information hierarchy, and streamlined prospective member outreach pathways.",
      highlights: [
        "100/100 Google Lighthouse mobile performance score with instant FCP",
        "Conversion-focused user journey driving direct membership inquiries",
        "Lightweight, zero-bloat architecture engineered for seamless fluid scrolling"
      ],
      metrics: [
        { label: "Performance", value: "100 Lighthouse" },
        { label: "Layout", value: "Mobile-First PWA" },
        { label: "Interactions", value: "GPU Accelerated" }
      ],
      tech: ["HTML5", "Modern CSS", "JavaScript ES6+", "Responsive UX"],
      githubUrl: "https://github.com/manuelgomes2006/Raw-Fitness",
      liveUrl: "https://manuelgomes2006.github.io/Raw-Fitness/",
      image: rawFitnessImg
    }
  ],

  contact: {
    heading: "Let's build something extraordinary.",
    text: "Open to software engineering opportunities, AI projects, and high-impact collaborations. Reach out directly or send a message below.",
    email: "manuelgomes062006@gmail.com",
    socials: {
      github: "https://github.com/manuelgomes2006",
      linkedin: "https://www.linkedin.com/in/manuel-gomes-638418388/",
      instagram: "https://www.instagram.com/manuel.undercover/"
    }
  }
};
