// Mock data for Achu Prasad's Portfolio

import preview1 from '../Assets/1 preview.png';
import preview2 from '../Assets/2 preview.png';
import preview3 from '../Assets/3 preview.png';

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

export const personalInfo = {
  name: "Achu Prasad",
  role: "Product Designer",
  tagline: "I design with clarity, intention, and empathy.",
  statement: "I am a simple, grounded product designer with a curious mind and a heart for people and nature. I design with clarity, kindness, and the hope of making life a little more peaceful.",
  email: "hello@achuprasad.com",
  location: "Bangalore, India"
};

export const aboutData = {
  intro: "I'm Achu, a product designer passionate about crafting digital experiences that balance business goals with user needs. My journey began in graphic design, but I found my true calling in the intersection of strategy, empathy, and visual craft.",
  philosophy: "I believe great design is invisible — it removes friction, creates clarity, and respects the user's time. Every pixel should earn its place.",
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
    role: "UI/UX Design Intern",
    company: "Tech Startup",
    duration: "2024 — Present",
    impact: "Working on user research and interface design for mobile applications. Contributing to design system documentation and prototyping."
  },
  {
    id: 2,
    role: "Freelance Designer",
    company: "Self-employed",
    duration: "2023 — Present",
    impact: "Designing brand identities and digital products for local businesses. Building expertise in user research and prototyping."
  },
  {
    id: 3,
    role: "Design Volunteer",
    company: "Non-profit Organization",
    duration: "2022 — 2023",
    impact: "Created visual designs for social campaigns and educational materials. Collaborated with teams across different departments."
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
    role: "UI/UX Designer: Responsible for end-to-end design including user research, wireframing, visual design, and prototyping.",
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
    slug: "healthcare-dashboard",
    title: "Healthcare Dashboard",
    subtitle: "Streamlining patient management",
    type: "Internship Project",
    description: "A comprehensive dashboard design for healthcare professionals to manage patient data efficiently. The project focused on simplifying complex medical workflows and improving the overall user experience for clinic staff.",
    role: "UI/UX Design Intern — Contributed to user research, wireframing, and UI design under senior designer mentorship.",
    tags: ["Dashboard", "Healthcare", "Enterprise"],
    liveLink: null,
    prototypeLink: "https://figma.com/prototype/example",
    thumbnail: preview2,
    heroMedia: {
      type: "image",
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop"
    },
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop", caption: "Main Dashboard" },
      { type: "image", url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop", caption: "Patient Records" },
      { type: "image", url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&h=800&fit=crop", caption: "Appointment Scheduler" },
      { type: "image", url: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=800&fit=crop", caption: "Medical History" },
      { type: "image", url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=800&fit=crop", caption: "Prescription Management" },
      { type: "image", url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop", caption: "Lab Results View" },
      { type: "image", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&h=800&fit=crop", caption: "Billing Interface" },
      { type: "image", url: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&h=800&fit=crop", caption: "Reports & Analytics" }
    ]
  },
  {
    id: 3,
    slug: "food-delivery-redesign",
    title: "Food Delivery Redesign",
    subtitle: "Reimagining restaurant discovery",
    type: "Personal Project",
    description: "A conceptual redesign of a food delivery app focusing on improving restaurant discovery and the ordering experience. The design emphasizes visual appeal of food imagery and streamlined checkout process.",
    role: "UI/UX Designer — Complete redesign concept including research, information architecture, and visual design.",
    tags: ["Mobile App", "Food & Beverage", "Redesign"],
    liveLink: null,
    prototypeLink: "https://figma.com/prototype/example",
    thumbnail: preview3,
    heroMedia: {
      type: "image",
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop"
    },
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop", caption: "Home Screen" },
      { type: "image", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop", caption: "Restaurant Listing" },
      { type: "image", url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&h=800&fit=crop", caption: "Menu View" },
      { type: "image", url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop", caption: "Item Details" },
      { type: "image", url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=800&fit=crop", caption: "Cart & Checkout" },
      { type: "image", url: "https://images.unsplash.com/photo-1482049016gy-2d1ec7ab7445?w=1200&h=800&fit=crop", caption: "Order Tracking" },
      { type: "image", url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=800&fit=crop", caption: "Reviews & Ratings" },
      { type: "image", url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=800&fit=crop", caption: "Favorites Collection" }
    ]
  },
  {
    id: 4,
    slug: "travel-booking-app",
    title: "Travel Booking App",
    subtitle: "Discover your next adventure",
    type: "Live Project",
    description: "A travel booking application designed to help users discover and book unique travel experiences. The app features an immersive visual design that inspires wanderlust while maintaining functional booking flows.",
    role: "UI Designer — Visual design and prototyping for key user flows including search, booking, and trip management.",
    tags: ["Mobile App", "Travel", "Booking"],
    liveLink: "https://example-travel-app.com",
    prototypeLink: "https://figma.com/prototype/example",
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    heroMedia: {
      type: "image",
      url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop"
    },
    gallery: [
      { type: "image", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop", caption: "Destination Discovery" },
      { type: "image", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800&fit=crop", caption: "Search Results" },
      { type: "image", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop", caption: "Trip Details" },
      { type: "image", url: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1200&h=800&fit=crop", caption: "Booking Flow" },
      { type: "image", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop", caption: "Itinerary View" },
      { type: "image", url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&h=800&fit=crop", caption: "Accommodation Options" },
      { type: "image", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop", caption: "Activity Booking" },
      { type: "image", url: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=800&fit=crop", caption: "Trip Summary" }
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
  { name: "Email", url: "mailto:hello@achuprasad.com" }
];
