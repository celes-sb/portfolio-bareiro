import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Celeste S. Bareiro",
  title: "Hi all, I'm Celeste",
  description:
    "I'm a passionate Full Stack web developer with experience in Front End development using JavaScript, React.js and Node.js. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://www.github.com/celes-sb",
};

export const openSource = {
  githubUserName: "celes-sb",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "cnyx7@proton.me",
  linkedin: "https://www.linkedin.com/in/celestesoledadb/",
  github: "https://github.com/celes-sb",
  instagram: "https://www.instagram.com/homeostasis.masajes"
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "I am a Full Stack Developer currently honing her skills in Front End technologies and SQL.",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "75", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "10",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "4Geeks Academy",
    subHeader: "Full Stack Software Develoment",
    duration: "January 2023 - May 2023",
    desc: "Descripcion",
  },
  {
    schoolName: "freeCodeCamp",
    subHeader: "Responsive Web Design",
    duration: "Octubre 2022 - November 2022",
    desc: "Descripcion",
  },
  {
    schoolName: "freeCodeCamp",
    subHeader: "JavaScript",
    duration: "Octubre 2024 - November 2024",
    desc: "Descripcion",
  },
  {
    schoolName: "freeCodeCamp",
    subHeader: "Front End Libraries",
    duration: "Octubre 2022 - November 2022",
    desc: "Descripcion",
  },
  {
    schoolName: "The Odin Project",
    subHeader: "Front End Libraries",
    duration: "Octubre 2022 - November 2022",
    desc: "Descripcion",
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "Sanbra LLC / 4Geeks Academy",
    companyLogo: "/img/icons/common/geeks.jpg",
    date: "August 2023 - May 2024",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    descBullets: [
    "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "No Country",
    companyLogo: "/img/icons/common/nocountry.png",
    date: "June 2023",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
  },
];

export const projects: ProjectType[] = [
  {
    name: "Movement by Martín Fiasche",
    desc: "Describir proyecto",
    github: "https://github.com/celes-sb",
    link: "https://github.com/celes-sb",
  },
  {
    name: "Proyecto",
    desc: "Empezar a poner proyectos / descripcion",
    github: "https://github.com/celes-sb",
    link: "https://github.com/celes-sb",
  },
  {
    name: "Proyecto",
    desc: "Empezar a poner proyectos / descripcion",
    github: "https://github.com/celes-sb",
    link: "https://github.com/celes-sb",
  },
  {
    name: "Proyecto",
    desc: "Empezar a poner proyectos / descripcion",
    github: "https://github.com/celes-sb",
    link: "https://github.com/celes-sb",
  },
  {
    name: "Proyecto",
    desc: "Empezar a poner proyectos / descripcion",
    github: "https://github.com/celes-sb",
    link: "https://github.com/celes-sb",
  },
  {
    name: "Proyecto",
    desc: "Empezar a poner proyectos / descripcion",
    github: "https://github.com/celes-sb",
    link: "https://github.com/celes-sb",
  },
];

/*export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];*/

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hanzla Tauqeer",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
