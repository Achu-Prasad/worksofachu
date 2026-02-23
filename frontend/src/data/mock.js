// Mock data for Achu Prasad's Portfolio

// Guidly project images
import guidlyPreview from '../Assets/Guidly/preview.png';
import guidlyPreviewLong from '../Assets/Guidly/3 preview.png';
import guidly1 from '../Assets/Guidly/Desktop - 1.png';
import guidly2 from '../Assets/Guidly/Desktop - 2.png';
import guidly3 from '../Assets/Guidly/Desktop - 3.png';
import guidly4 from '../Assets/Guidly/Desktop - 4.png';
import guidly5 from '../Assets/Guidly/Desktop - 5.png';
import guidly6 from '../Assets/Guidly/Desktop - 6.png';
import guidly7 from '../Assets/Guidly/Desktop - 7.png';
import guidly8 from '../Assets/Guidly/Desktop - 8.png';

// ICG project assets
import icgPreview from '../Assets/ICG/preview.png';

// ICG project videos
import icgScene2 from '../Assets/ICG/Scene-2.mp4';
import icgScene3 from '../Assets/ICG/Scene-3.mp4';
import icgScene4 from '../Assets/ICG/Scene-4.mp4';
import icgScene5 from '../Assets/ICG/scene-5.mp4';
import icgScene6 from '../Assets/ICG/Scene-6.mp4';
import icgScene7 from '../Assets/ICG/Scene-7.mp4';
import icgScene8 from '../Assets/ICG/Scene-8.mp4';

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
    detailsTitle: "Designing a mentorship and career-growth platform beyond personal networks",
    subtitle: "A Platform for Mentorship and Career Growth",
    type: "Personal Project",
    description: "Guidly is a **community-driven mentorship platform** designed to help people find mentors who align with their goals, interests, and vibe. It connects individuals with **experienced mentors** from different backgrounds, making guidance more accessible, personal, and local or global. Guidly focuses on **meaningful connections** through clear profiles, interest-based discovery, and simple interaction flows that reduce friction and encourage real conversations.",
    role: "UI/UX Designer",
    backgroundColor: "#ffffff",
    tags: ["Figma", "Stich AI", "Perplexity AI",],
    projectTypeDetail: "Personal Project • Finding your mentor is no more a headache",
    supervisedBy: "Self-Directed",
    team: [{ name: "Achu Prasad", role: "Solo" }],
    contribution: ["Ui Design", "UX Research", "Prototyping"],
    tools: ["Figma", "Stich AI", "Perplexity AI"],
    timeline: "4 Weeks",
    liveLink: null,
    prototypeLink: "https://guidlyproto.netlify.app/",
    thumbnail: guidlyPreview,
    heroMedia: {
      type: "image",
      url: guidlyPreview
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
    detailsTitle: "ICG - Website Redesign & Branding",
    subtitle: "ICG is a B2B Cybersecurity firm located in Florida",
    type: "Internship Project",
    projectTypeDetail: "Internship Project at Basenine",
    supervisedBy: "Basil Alosious",
    team: [
      { name: "Basil Alosious", role: "PM" },
      { name: "Reva Harke", role: "Dev" }
    ],
    contribution: ["Ui Design", "Graphics", "Branding"],
    tools: ["Figma", "Photoshop"],
    timeline: "1 Month",
    description: "ICG is a U.S.-based technology company founded in 1977, specializing in managed IT and cloud services for businesses that prioritize security, reliability, and scale. **As the Product Designer on this project, I led the visual and experiential direction of the website **, shaping both the UI and the overall creative vision. My role focused on designing a cohesive, adaptable system that could scale with the company while delivering a seamless user experience across touchpoints. Alongside the website UI, **I defined a distinct brand identity, created comprehensive style guidelines, and designed the full marketing website in Figma** laying a strong foundation for consistent future growth.",
    role: "Product Designer",
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
      { type: "video", url: icgScene2, caption: "I designed **13+ distinct website pages** for ICG, including several pages powered by **Webflow CMS**, which required a strong focus on scalability and flexibility. The designs were built to accommodate varying content lengths and structures without breaking layout or hierarchy. I iterated extensively across multiple layout directions, balancing **responsiveness, feasibility, and visual consistency** to ensure the system could perform reliably across devices and future content updates." },
      { type: "video", url: icgScene3, caption: "The website content included multiple timelines and step-based narratives defined by the product team, with messaging that varied significantly in length across sections. To ensure the design remained effective in both short and long-form scenarios, I focused on layouts that could gracefully adapt without overwhelming users. Recognizing that dense, **linear content increases cognitive load and reduces engagement**, **I introduced scroll-based design patterns** that progressively revealed information—making complex content easier to consume and more engaging to read." },
      { type: "video", url: icgScene4, caption: "I designed and implemented **purposeful micro-interactions across the website to enhance usability and create moments of delight**, without distracting from core tasks. Each interaction was carefully aligned with ICG’s brand identity, ensuring consistency in motion, feedback, and tone across all pages while reinforcing a cohesive and polished user experience." },
      { type: "video", url: icgScene6, caption: "The existing value proposition section **no longer reflected ICG’s current services or priorities**. The messaging felt dated, lacked clarity, and failed to communicate meaningful value to users. To realign this critical section with the company’s present-day offerings and positioning, I explored 30+ design iterations, refining both messaging hierarchy and visual structure. **The final direction delivers a clearer, more relevant value proposition** that better represents ICG’s evolving services and brand." },
      { type: "video", url: icgScene7, caption: "I established a structured **design system** by defining color, typography, and spacing variables to ensure consistency and long-term scalability across the website. These variables translated seamlessly into Webflow, enabling developers to easily replicate and maintain styles without friction. We used **Relume components** as a foundational framework, which significantly accelerated the design-to-development process and helped convert the designs into a fully functional website with high fidelity and efficiency." },
      { type: "video", url: icgScene8, caption: "Buttons were the only component designed separately, allowing for greater control over interaction, hierarchy, and accessibility across the interface. I created multiple button variants optimized for different surfaces (light and dark) and use cases, ensuring clarity and consistency in all contexts. Each variant included **custom styles and motion behaviors**, reinforcing usability while staying aligned with the brand. To support long-term consistency, I documented these patterns through a clear **style guide and typography guidelines** for both design and development teams." }
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
