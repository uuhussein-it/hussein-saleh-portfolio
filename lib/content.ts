export const profile = {
  name: "Hussein Saleh",
  firstName: "Hussein",
  role: "Instructional Designer",
  tagline:
    "Designing clear, engaging, and measurable learning experiences.",
  intro:
    "I'm an instructional designer with an M.Ed. in Learning Design and Technology. I turn complex subject matter into structured, interactive learning that people actually remember.",
  sub:
    "Graduate-level training in learning theory, instructional models (ADDIE, SAM, backward design), and e-learning development.",
  email: "uuhussein@gmail.com",
  resumeUrl: "/resume.pdf",
  stats: [
    { num: "M.Ed.", label: "Learning Design" },
    { num: "12+", label: "Projects Built" },
    { num: "5", label: "E-Learning Tools" },
    { num: "1,000+", label: "Learners Reached" },
  ],
};

export const about = {
  headline: "Turning complex topics into clear, engaging learning",
  paragraphs: [
    "I recently completed my master's degree in instructional design and learning technology. My work blends learning science with hands-on design — building everything from storyboards and scripts to fully interactive e-learning modules.",
    "I care about the details: clear objectives, realistic scenarios, thoughtful assessments, and accessible design that works for every learner.",
  ],
  highlights: [
    {
      title: "Learning Science First",
      body: "Every decision starts from how people actually learn — cognitive load, spaced practice, and feedback.",
    },
    {
      title: "Design-Build Craft",
      body: "From storyboards and blueprints to polished modules in Articulate and Adobe tools.",
    },
    {
      title: "Measured Impact",
      body: "Learning that gets used: clear objectives, aligned assessments, and business outcomes.",
    },
    {
      title: "Accessible by Default",
      body: "Accessible, mobile-friendly design baked into the process from the first draft.",
    },
  ],
};

export const skills = [
  {
    title: "Instructional Design",
    items: [
      "ADDIE",
      "SAM",
      "Backward Design",
      "Bloom's Taxonomy",
      "Storyboarding",
      "Scriptwriting",
      "Learning Objectives",
      "Assessment Design",
    ],
  },
  {
    title: "Authoring & Tools",
    items: ["Articulate Storyline", "Rise 360", "Adobe Captivate", "Camtasia", "Vyond", "Figma"],
  },
  {
    title: "Curriculum & LMS",
    items: [
      "Curriculum Planning",
      "LMS Administration",
      "SCORM / xAPI",
      "Coursera / Moodle",
      "Canvas",
      "Data & Evaluation",
    ],
  },
  {
    title: "AI-Assisted Design",
    items: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "AI Image Tools",
      "AI Voice & Video",
    ],
  },
  {
    title: "Delivery & Collaboration",
    items: [
      "Instructor-led Training",
      "Virtual Facilitation",
      "Project Management",
      "Stakeholder Interviews",
      "SME Collaboration",
      "Microlearning",
    ],
  },
];

export const projects = [
  {
    slug: "function-of-beauty",
    title: "Function of Beauty — Customer Care Onboarding",
    tag: "E-Learning Module",
    description:
      "An onboarding module for Function of Beauty support teams, explaining the personalized-product engine and order flows. (Draft — replace with the real learning problem, your approach, and the result.)",
    photo: "",
    imageLabel: "PROJECT",
    tags: ["Storyline", "SCORM"],
    role: "Instructional Designer & Developer",
    duration: "4 weeks",
    href: "/projects/function-of-beauty",
    overview: [
      "Function of Beauty support teams need to understand how the personalized shampoo-formula engine works so they can answer customer questions confidently.",
      "This module breaks the product engine into simple, visual explanations with realistic support scenarios and built-in knowledge checks.",
    ],
    gallery: [
      { title: "Module intro screen", src: "/photos/function-of-beauty-1.svg" },
      { title: "Product engine explained", src: "/photos/function-of-beauty-2.svg" },
    ],
    modules: [
      {
        title: "Module 1: Company Overview & Values",
        url: "https://360.articulate.com/review/content/463e3caa-7e55-4b3f-b23c-dfa7bf2ff0af/review",
      },
      {
        title: "Module 2: Workplace Safety",
        url: "https://360.articulate.com/review/content/331ebcb0-019a-4f49-a594-34c601d76358/review",
      },
      {
        title: "Module 3: Quality",
        url: "https://360.articulate.com/review/content/86e09896-802c-45cc-b7d0-26c5d14c4b69/review",
      },
    ],
    downloads: [
      {
        title: "Module 1 SCORM file",
        url: "/scorm/function-of-beauty-module-1.zip",
      },
      {
        title: "Module 2 SCORM file",
        url: "/scorm/function-of-beauty-module-2.zip",
      },
    ],
  },
  {
    slug: "nutrition-fundamentals",
    title: "Nutrition Fundamentals Course",
    tag: "Curriculum Design",
    description:
      "A self-paced nutrition essentials course with interactive scenarios, knowledge checks, and LMS tracking. (Draft — replace with the real learning problem, your approach, and the result.)",
    photo: "",
    imageLabel: "PROJECT",
    tags: ["Rise 360", "Camtasia"],
    role: "Instructional Designer & Developer",
    duration: "6 weeks",
    href: "/projects/nutrition-fundamentals",
    overview: [
      "A self-paced course introducing the fundamentals of nutrition: macronutrients, portion guidance, and reading food labels.",
      "Built in Rise 360 with Camtasia explainer videos, interactive knowledge checks, and SCORM tracking for the LMS.",
    ],
    gallery: [
      { title: "Macronutrients visual", src: "/photos/nutrition-1.svg" },
      { title: "Knowledge check", src: "/photos/nutrition-2.svg" },
    ],
  },
];

export const contact = {
  heading: "Let's create better learning together",
  message:
    "I'm currently looking for instructional design roles and freelance projects. If you have a training problem to solve, I'd love to hear from you.",
  email: "uuhussein@gmail.com",
  emailHref: "mailto:uuhussein@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/hussein-abdelsalam-0a4475135/",
  githubUrl: "", // Optional
  location: "Available for remote & on-site roles",
};