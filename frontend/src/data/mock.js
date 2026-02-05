// Mock data for Achu Prasad's Portfolio

// Guidly project images
import guidlyPreview from '../Assets/Guidly/preview.png';
import guidlyPreviewLong from '../Assets/Guidly/preview long.png';
import guidly1 from '../Assets/Guidly/Desktop - 1.png';
import guidly2 from '../Assets/Guidly/Desktop - 2.png';
import guidly3 from '../Assets/Guidly/Desktop - 3.png';
import guidly4 from '../Assets/Guidly/Desktop - 4.png';
import guidly5 from '../Assets/Guidly/Desktop - 5.png';
import guidly6 from '../Assets/Guidly/Desktop - 6.png';
import guidly7 from '../Assets/Guidly/Desktop - 7.png';
import guidly8 from '../Assets/Guidly/Desktop - 8.png';

// ICG project images
import icgPreview from '../Assets/ICG/preview.png';
import icg1 from '../Assets/ICG/ICG 1.png';
import icg2 from '../Assets/ICG/ICG 2.png';
import icg3 from '../Assets/ICG/ICG 3.png';
import icg4 from '../Assets/ICG/ICG 4.png';
import icg5 from '../Assets/ICG/ICG 5.png';
import icg6 from '../Assets/ICG/ICG 6.png';
import icg7 from '../Assets/ICG/ICG 7.png';
import icg8 from '../Assets/ICG/ICG 8.png';

// ICG project videos
import icgScene2 from '../Assets/ICG/Scene-2.mp4';

export const personalInfo = {
  name: "Achu Prasad",
  role: "Product Designer",
  tagline: "I design with clarity, intention, and empathy.",
  statement: "I am a simple, grounded product designer with a curious mind and a heart for people and nature. I design with clarity, kindness, and the hope of making life a little more peaceful.",
  email: "achuprasad@zohomail.in",
  location: "Kerala, India"
};

export const aboutData = {
  intro: "I'm Achu, a product designer passionate about crafting digital experiences that balance business goals with user needs. My journey began in graphic design, but I found my true calling in the intersection of strategy, empathy, and visual craft.",
  philosophy: "I believe great design is invisible it removes friction, creates clarity, and respects the user's time. Every pixel should earn its place.",
  transition: "Currently exploring product design to create lasting impact. I'm drawn to complex problems that require both analytical thinking and creative solutions."
};

export const whyIDesign = {
  quote: "Design is not just what it looks like and feels like. Design is how it works.",
  author: "— Steve Jobs",
  personal: "I design because I believe technology should serve humanity, not the other way around. Every interface is a conversation, and I want that conversation to be meaningful."
};

export const workExperience = [
  {
    id: 1,
    role: "Product Design Intern",
    company: "Bassenine",
    duration: "OCT 2025 — JAN 2026",
    impact: "Designed user-centric experiences across B2B SaaS, B2B services, and consumer products. Led end-to-end website redesigns for live products, contributing to 6+ major web projects. Built scalable design systems, delivered clean developer handoffs, and supported branding through decks and social creatives across diverse domains."
  },
  {
    id: 2,
    role: "UI/UX Design Intern",
    company: "Nexotech",
    duration: "JAN 2025 — SEP 2025",
    impact: "Designed an end-to-end online course platform, defining core user flows and key pages. Conducted competitor analysis and UX research to drive design decisions, delivering high-fidelity UI optimized for usability and conversion."
  },
  {
    id: 3,
    role: "Product Design Intern",
    company: "Gistr",
    duration: "APR 2025 — MAY 2025",
    impact: "Designed user-centric product UI with accessible, visually refined components, ensuring strong contrast and a consistent design language. Supported brand growth by creating scalable social media templates and design assets."
  },
  {
    id: 4,
    role: "Graphic Designer & Social Media Manager",
    company: "Gregorian Group of Institutions",
    duration: "APR 2022 — JUN 2023",
    impact: "Created print advertisements and offline marketing assets to strengthen the college’s brand identity. Identified a digital presence gap and launched the college’s Instagram, growing it to 2,000+ organic followers within one month. Increased student engagement through daily posters, event creatives, and motion graphics content."
  },
  {
    id: 5,
    role: "Motion Graphics Artist",
    company: "I and Learn Pvt Ltd",
    duration: "AUG 2022 — FEB 2023",
    impact: "Created explainer videos for Grades 1–12 aligned with the NCERT curriculum, editing and syncing audio with custom animations. Designed motion graphics to simplify complex concepts and delivered engaging, high-quality educational content."
  }
];

export const projects = [
  {
    id: 1,
    slug: "Guidly-mobile-app",
    title: "Guidly Mobile App",
    subtitle: "Finding your mentor is no more a headache",
    type: "Personal Project",
    description: "Guidly is a community-driven mentorship platform designed to help people find mentors who align with their goals, interests, and vibe. It connects individuals with experienced mentors from different backgrounds, making guidance more accessible, personal, and local or global. Guidly focuses on meaningful connections through clear profiles, interest-based discovery, and simple interaction flows that reduce friction and encourage real conversations.",
    role: "UI/UX Designer",
    backgroundColor: "#ffffff",
    tags: ["Figma", "Stich AI", "Perplexity AI",],
    liveLink: null,
    prototypeLink: "https://tinyurl.com/guidlyprototype",
    thumbnail: guidlyPreview,
    heroMedia: {
      type: "image",
      url: guidlyPreviewLong
    },
    gallery: [
      { type: "image", url: guidly1, caption: "Dashboard Overview" },
      { type: "image", url: guidly2, caption: "Expense Tracking" },
      { type: "image", url: guidly3, caption: "Budget Planning" },
      { type: "image", url: guidly4, caption: "Savings Goals" },
      { type: "image", url: guidly5, caption: "Transaction History" },
      { type: "image", url: guidly6, caption: "Analytics View" },
      { type: "image", url: guidly7, caption: "User Profile" },
      { type: "image", url: guidly8, caption: "Settings & Preferences" }
    ]
  },
  {
    id: 2,
    slug: "icg-project",
    title: "ICG Website Revamp",
    subtitle: "ICG is a B2B Cybersecurity firm located in Florida",
    type: "Internship Project",
    description: "In this role, I led the comprehensive redesign of the ICG website's user interface, focusing on a complete visual rebranding. My primary responsibility was to create scalable, responsive designs for key screens while establishing a robust design system. I defined variable systems for colors, fonts, and spacing to maintain strict consistency throughout the platform. Additionally, I produced custom imagery and integrated Rive animations to create a dynamic and engaging user experience.",
    role: "UI/UX Designer",
    backgroundColor: "#f1f1f1",
    tags: ["Ui Design", "Design Systems", "Visual Branding"],
    liveLink: 'https://www.icgi.com/',
    prototypeLink: null,
    thumbnail: icgPreview,
    heroMedia: {
      type: "image",
      url: icgPreview
    },
    gallery: [
      { type: "video", url: icgScene2, caption: "ICG Design 1" },
      { type: "image", url: icg2, caption: "ICG Design 2" },
      { type: "image", url: icg3, caption: "ICG Design 3" },
      { type: "image", url: icg4, caption: "ICG Design 4" },
      { type: "image", url: icg5, caption: "ICG Design 5" },
      { type: "image", url: icg6, caption: "ICG Design 6" },
      { type: "image", url: icg7, caption: "ICG Design 7" },
      { type: "image", url: icg8, caption: "ICG Design 8" }
    ]
  }
];

export const personalValues = {
  title: "What I Stand For",
  statement: "I believe in designing for impact, not just aesthetics. Every project is an opportunity to make someone's life a little easier, a little better.",
  values: [
    { title: "Clarity over complexity", description: "Simple solutions to complex problems" },
    { title: "Empathy first", description: "Understanding before designing" },
    { title: "Continuous learning", description: "Growing with every project" }
  ]
};

export const beyondWork = {
  title: "Beyond Work",
  subtitle: "Things that inspire me outside the screen",
  interests: [
    { name: "Photography", description: "Capturing moments and compositions" },
    { name: "Reading", description: "Design thinking and philosophy" },
    { name: "Travel", description: "Finding inspiration in new places" },
    { name: "Cooking", description: "Creating with different ingredients" }
  ]
};

export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/achuprasad" },
  { name: "Dribbble", url: "https://dribbble.com/achuprasad" },
  { name: "Twitter", url: "https://twitter.com/achuprasad" },
  { name: "Email", url: "mailto:achuprasad@zohomail.in" }
];
