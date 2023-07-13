import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  SQL,
  Cpp,
  tailwind,
  git,
  noexp,
  jobit,
  vebo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "C++ Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: SQL,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "Git",
    icon: git,
  },
];

const about = [
  {
    title: "Information",
    content: [
      "Email : ngotancong1441999@gmail.com",
      "Phone Number : 0983732082",
      "Date of Birth : 14 / 04 / 1999",
      "Address : Da Nang, Viet Nam",
      "Github : https://github.com/ntcong1404",
    ],
  },
  {
    title: "Summary",
    content: [
      "Education : Control Engineering & Automation at University of Science and Technology - The University of DaNang",
      "I majored in Control Engineering & Automation at University of Science and Technology. My field of study is not specialized in software developer, so most of the knowledge about this field is self – study. I do not hesitate to learn more to improve my skills as well as myself",
    ],
  },
];

const experiences = [
  {
    title: "No Experience",
    company_name: "",
    icon: noexp,
    iconBg: "#383E56",
    date: "",
    points: [""],
  },
];

const projects = [
  {
    name: "Website live football",
    description:
      "I wrote a website to watch live football, football news and replay matches.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: vebo,
    source_code_link: "https://github.com/ntcong1404/VeboTV-",
    link_demo: "https://vebo-tv.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "Web introduce about yourself, education, work experience, skills and some other information",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ntcong1404/Portfolio",
    link_demo: "https://vebo-tv.vercel.app/",
  },
];

export { services, technologies, experiences, projects, about };
