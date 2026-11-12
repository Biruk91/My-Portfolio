export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'Clone' | 'Games';
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  githubLinks?: ProjectLink[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType?: string;
  period: string;
  duration?: string;
  location: string;
  locationType?: string;
  current?: boolean;
  description: string;
  highlights: string[];
  skills?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export const personalInfo = {
  name: "Biruk Ayele Birhanu",
  shortName: "Biruk Ayele",
  title: "Full-Stack Web Developer",
  headline: "Full-Stack Web Developer | React.js | Next.js | React Native | Flutter | Node.js | Spring Boot | PostgreSQL | MySQL | Mongo",
  roles: [
    "Full-Stack Web Developer",
    "ERPNext Developer",
    "Odoo Developer",
    "Freelancer"
  ],
  bio: `Hardworking and passionate job seeker with strong organizational skill eager to secure a challenging position as a Full-Stack Web Developer, App Developer, ERPNext Developer, or Odoo Developer. Ready to seek and maintain full-time or part-time positions offering professional challenges utilizing interpersonal skills, excellent time management, and problem-solving abilities. Detail-oriented Web Developer adept at interpreting requirements, working with cross-functional teams, and meeting production deadlines. Skilled at quickly learning new technologies, frameworks, and workflows.`,
  email: "biruk.ayele.birhanu@gmail.com",
  phone: "+251925346221",
  location: "Addis Ababa, Ethiopia",
  address: "2QR7+584, King George VI St, Addis Ababa, Ethiopia 1000",
  profileImage: "/images/profile/Biruk.jpg",
  heroBackground: "/images/profile/13.jpg",
  logoImage: "/images/profile/logo.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/biruk-ayele/",
    github: "https://github.com/",
    twitter: "https://twitter.com/BirukAy52252713?t=cdHHIHW81duv9r0V2FLhXg&s=09",
    instagram: "https://instagram.com/birukayele1?igshid=ZDdkNTZiNTM=",
    facebook: "https://www.facebook.com/biruk.love.5832/"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Spring Boot" },
      { name: "REST API" }
    ]
  },
  {
    category: "ERP & Mobile",
    skills: [
      { name: "ERPNext" },
      { name: "Odoo" },
      { name: "React Native" },
      { name: "Flutter" }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Git" }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "etech-fullstack",
    role: "Junior Full-Stack Web Developer",
    company: "eTech S.C.",
    employmentType: "Full-time",
    period: "Sep 2026 - Present",
    duration: "Present",
    location: "Addis Ababa, Ethiopia",
    locationType: "On-site",
    current: true,
    description:
      "Engineering enterprise web applications, automating business workflows, and implementing custom solutions with core focus on ERPNext and backend integration.",
    highlights: [
      "Architecting and developing business logic and custom workflows in ERPNext",
      "Building full-stack modules and integrating REST APIs with relational databases",
      "Collaborating on-site with engineering teams to ensure optimal application performance"
    ],
    skills: ["ERPNext", "Full-Stack Development", "Python", "JavaScript", "MySQL"]
  },
  {
    id: "etech-intern",
    role: "Software Developer Intern",
    company: "eTech S.C.",
    employmentType: "Internship",
    period: "Apr 2026 - Aug 2026",
    duration: "5 mos",
    location: "Addis Ababa, Ethiopia",
    locationType: "Hybrid",
    current: false,
    description:
      "Full-Stack Web Developer Intern — eTech SC. Learning and applying full-stack development using modern technologies, building responsive interfaces, working with backend APIs, and gaining hands-on experience in real-world software development.",
    highlights: [
      "Built responsive user interfaces and connected frontend features with backend REST APIs",
      "Gained hands-on experience in mobile development with React Native and backend systems with Spring Boot",
      "Collaborated in an agile hybrid team adhering to enterprise coding standards and Git workflows"
    ],
    skills: ["React Native", "Spring Boot", "Full-Stack Development", "REST APIs", "Git"]
  },
  {
    id: "heleus-ai",
    role: "Frontend Developer",
    company: "Heleus AI",
    employmentType: "Part-time",
    period: "Sep 2025 - Dec 2025",
    duration: "4 mos",
    location: "Addis Ababa, Ethiopia",
    locationType: "Hybrid",
    current: false,
    description:
      "Developed high-performance dynamic user interfaces, converted UI/UX designs into responsive web code, and integrated RESTful APIs using React.js.",
    highlights: [
      "Develop responsive and user-friendly web interfaces using HTML, CSS, and JavaScript",
      "Build dynamic web applications using modern framework (React.js)",
      "Convert UI/UX designs into functional web pages",
      "Ensure cross-browser compatibility and mobile responsiveness",
      "Optimize applications for maximum speed and performance",
      "Integrate RESTful APIs and backend services",
      "Maintain and improve existing codebases, debug and fix front-end issues",
      "Follow best practices for clean, maintainable, and scalable code"
    ],
    skills: ["React.js", "Front-end Coding", "Web Application Development", "JavaScript", "REST APIs"]
  }
];

export const services: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "I do some research before starting my development to choose the right way for the job.",
    iconName: "Briefcase"
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description:
      "I design my websites for every screen size available and I make sure it looks great on every device.",
    iconName: "CheckSquare"
  },
  {
    id: "beautiful-code",
    title: "Beautiful Code",
    description:
      "Working on projects, I write beautiful and clean codes to make them better readable for any partner or client.",
    iconName: "BarChart3"
  },
  {
    id: "quick-learner",
    title: "Quick Learner",
    description:
      "I like to learn new things and I have the ability to learn it quickly.",
    iconName: "Search"
  },
  {
    id: "on-time",
    title: "On Time",
    description:
      "Always responsible to complete any given project on time.",
    iconName: "Sun"
  },
  {
    id: "online",
    title: "Online",
    description:
      "Easy to reach and happy to help.",
    iconName: "CalendarDays"
  }
];

export const projects: Project[] = [
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description: "YouTube Clone built with HTML & CSS.",
    category: "Clone",
    tech: ["HTML", "CSS"],
    image: "/images/projects/youtube.jpg",
    demoUrl: "https://youtube-clone-bura.netlify.app/",
    githubLinks: [
      { label: "GitHub Code", url: "https://github.com/Biruk91/youtube-Clone" }
    ],
    featured: true
  },
  {
    id: "apple-showcase",
    title: "Apple Clone",
    description: "Apple clone with Bootstrap, Media Query & JavaScript.",
    category: "Frontend",
    tech: ["Bootstrap", "JavaScript", "CSS"],
    image: "/images/projects/apple-bootstrap.jpeg",
    demoUrl: "https://legendary-pie-f127c1.netlify.app/",
    githubLinks: [
      { label: "GitHub Code", url: "https://github.com/Biruk91/Apple-Clone" }
    ],
    featured: true
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description: "Classic Snake Game developed with JavaScript.",
    category: "Games",
    tech: ["JavaScript", "HTML5", "CSS"],
    image: "/images/projects/snake-game.jpeg",
    demoUrl: "https://venerable-froyo-2cb99f.netlify.app/",
    githubLinks: [
      { label: "GitHub Code", url: "https://github.com/Biruk91/snakeGame" }
    ],
    featured: false
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    description: "Netflix Clone with React and movie API integration.",
    category: "Frontend",
    tech: ["React.js", "API", "CSS"],
    image: "/images/projects/netflix.jpg",
    demoUrl: "https://aesthetic-wisp-299ded.netlify.app/",
    githubLinks: [
      { label: "GitHub Code", url: "https://github.com/Biruk91/Netflix-clone-2026" }
    ],
    featured: true
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    description: "Amazon Clone with MERN stack.",
    category: "Full-Stack",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/amazon.jpg",
    demoUrl: "https://amazone-clone-bura.netlify.app/",
    githubLinks: [
      { label: "GitHub Frontend", url: "https://github.com/Biruk91/Netflix-clone-2026" },
      { label: "GitHub Backend", url: "https://github.com/Biruk91/amazon-api-deploy" }
    ],
    featured: true
  }
];
