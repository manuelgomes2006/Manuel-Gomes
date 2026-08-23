import manuelHeroBw from '../assets/images/manuel-hero-bw.jpg';
import manuelAboutBw from '../assets/images/manuel-about-bw.jpg';
import rawFitnessImg from '../assets/images/raw-fitness.jpg';

export const PERSONAL_DATA = {
  name: "MANUEL GOMES",
  role: "AI Developer & Builder",
  status: "Currently building & learning",
  heroTagline: "BCA (Hons.) student specializing in Data Science & Artificial Intelligence, building modern web experiences and AI-powered products.",
  aboutHeading: "More than just code.",
  aboutBio: "I'm Manuel, a BCA (Hons.) student specializing in Data Science & Artificial Intelligence. I enjoy building useful applications, experimenting with AI, designing modern interfaces, and turning ideas into real products.",
  aboutTags: ["AI", "Web Development", "Data Science", "UI/UX", "Builder"],
  
  images: {
    hero: manuelHeroBw,
    about: manuelAboutBw,
  },

  education: {
    institution: "Techno India University",
    degree: "Bachelor of Computer Applications (Honours)",
    specialization: "Data Science & Artificial Intelligence",
    status: "Currently Pursuing",
  },

  skills: [
    {
      category: "Development",
      items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"]
    },
    {
      category: "AI & Data",
      items: ["Gemini AI", "Generative AI", "Data Science", "Machine Learning"]
    },
    {
      category: "Programming",
      items: ["Python", "Java", "SQL"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code"]
    }
  ],

  projects: [
    {
      id: "scholarmatch-ai",
      title: "ScholarMatch AI",
      tagline: "AI-powered opportunity eligibility analyzer",
      description: "An application that analyzes student profiles against scholarships, internships, and competitions and provides eligibility verdicts, explanations, match percentages, and improvement recommendations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Gemini AI"],
      githubUrl: "https://github.com/manuelgomes2006/scholarmatch",
      liveUrl: "https://manuelgomes2006.github.io/scholarmatch/",
      image: null
    },
    {
      id: "raw-fitness",
      title: "RAW FITNESS",
      tagline: "GYM website for a local business",
      description: "Raw Fitness is a modern, responsive web application designed for a local gym business. It provides users with essential information about gym memberships, schedules, and training programs.",
      tech: ["JavaScript", "HTML", "CSS", "PWA", "Chart.js"],
      githubUrl: "https://github.com/manuelgomes2006/Raw-Fitness",
      liveUrl: "https://manuelgomes2006.github.io/Raw-Fitness/",
      image: rawFitnessImg
    }
  ],

  contact: {
    heading: "Let's build something.",
    text: "Have an idea, project, or opportunity? Let's talk.",
    email: "manuelgomes.dev@gmail.com",
    socials: {
      github: "https://github.com/manuelgomes2006",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  }
};
