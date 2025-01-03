interface Technology {
  friendlyName: string;
  iconName: string;
}

interface Project {
  name: string;
  githubLink?: string;
  websiteLink?: string;
  tech?: Technology[];
  description: string;
  largeTile?: boolean;
  year?: number;
  image?: any;
  backgroundColor?: string;
}

import fivePointZeroGPAStudent from "@images/works/5-0-gpa-student.jpg";
import commute from "@images/works/commute.png";
import feducia from "@images/works/feducia.png";
import tp from "@images/works/tp.png";
import upgrade from "@images/works/upgrade.png";
import beacon from "@images/works/beacon.png";
import xtraBuddy from "@images/works/xtrabuddy.png";
import simplyWords from "@images/works/simplywords.png";

const projects: Project[] = [
  {
    name: "5.0 GPA Student",
    githubLink: "https://github.com/arashnrim/5.0-gpa-student",
    tech: [
      { friendlyName: "TypeScript", iconName: "simple-icons:typescript" },
      { friendlyName: "Discord", iconName: "simple-icons:discord" },
      { friendlyName: "OpenAI GPT", iconName: "simple-icons:openai" },
      {
        friendlyName: "Google Cloud Platform",
        iconName: "simple-icons:googlecloud",
      },
    ],
    description:
      "A friendly bot that lets you learn with a study buddy about anything.",
    largeTile: true,
    year: 2023,
    image: fivePointZeroGPAStudent,
    backgroundColor: "#CCCCCC",
  },
  {
    name: "SimplyWords",
    githubLink: "https://github.com/SimplyWordsTeam/SimplyWords",
    tech: [
      { friendlyName: "Java", iconName: "devicon-plain:java" },
      { friendlyName: "Android", iconName: "simple-icons:android" },
      { friendlyName: "OpenAI GPT", iconName: "simple-icons:openai" },
    ],
    description:
      "An Android app for senior Singaporeans to understand content in digital services better.",
    largeTile: true,
    year: 2023,
    image: simplyWords,
    backgroundColor: "#17322A",
  },
  {
    name: "XtraBuddy",
    // websiteLink:
    //   "https://play.google.com/store/apps/details?id=sg.edu.np.mad.xtrabuddy",
    tech: [
      { friendlyName: "Java", iconName: "devicon-plain:java" },
      { friendlyName: "Android SDK", iconName: "simple-icons:android" },
      { friendlyName: "Firebase", iconName: "simple-icons:firebase" },
    ],
    description:
      "An Android app that helps you find buddies to do activities with.",
    largeTile: true,
    year: 2022,
    image: xtraBuddy,
    backgroundColor: "#0080FF",
  },
  {
    name: "Beacon",
    githubLink: "https://github.com/pikanotjx/sutdwasdoftime",
    websiteLink: "https://devpost.com/software/beacon-42m7ih",
    tech: [
      { friendlyName: "Python", iconName: "simple-icons:python" },
      {
        friendlyName: "Google Cloud Platform",
        iconName: "simple-icons:googlecloud",
      },
      { friendlyName: "ESP32", iconName: "simple-icons:espressif" },
      { friendlyName: "Arduino", iconName: "simple-icons:arduino" },
    ],
    description:
      "An automated IOT system for people with disabilities to adjust impediments in their environment to their needs.",
    largeTile: false,
    year: 2023,
    image: beacon,
    backgroundColor: "#F3BC2B",
  },
  {
    name: "Commute",
    githubLink: "https://github.com/arashnrim/commute",
    tech: [
      { friendlyName: "TypeScript", iconName: "simple-icons:typescript" },
      { friendlyName: "Telegraf", iconName: "simple-icons:telegram" },
      { friendlyName: "Railway", iconName: "simple-icons:railway" },
    ],
    description:
      "A Telegram bot that helps you find the best public route to your destination.",
    largeTile: false,
    year: 2022,
    image: commute,
    backgroundColor: "#005DFF",
  },
  {
    name: "tp",
    githubLink: "https://github.com/arashnrim/tp",
    tech: [{ friendlyName: "Go", iconName: "simple-icons:go" }],
    description:
      "A CLI tool that lets you teleport anywhere and run commands in an instant.",
    largeTile: false,
    year: 2022,
    image: tp,
  },
  {
    name: "Upgrade",
    githubLink: "https://github.com/arashnrim/upgrade",
    tech: [
      { friendlyName: "Swift", iconName: "simple-icons:swift" },
      { friendlyName: "Firebase", iconName: "simple-icons:firebase" },
    ],
    description:
      "An app for students to understand their academic achievements better.",
    largeTile: false,
    year: 2019,
    image: upgrade,
    backgroundColor: "#8D53E9",
  },
  {
    name: "Listé",
    githubLink: "https://github.com/arashnrim/liste",
    websiteLink:
      "https://apps.apple.com/us/app/list%C3%A9-productive-to-do/id1486116734",
    tech: [
      { friendlyName: "Swift", iconName: "simple-icons:swift" },
      { friendlyName: "Firebase", iconName: "simple-icons:firebase" },
    ],
    description: "An open-sourced to-do list app made for everyone.",
    largeTile: false,
    year: 2019,
    // image: liste,
    backgroundColor: "#FF2600",
  },
  {
    name: "feducia",
    githubLink: "https://github.com/arashnrim/feducia",
    websiteLink: "https://devpost.com/software/feducia",
    tech: [
      { friendlyName: "Next.js", iconName: "simple-icons:nextdotjs" },
      { friendlyName: "Tailwind CSS", iconName: "simple-icons:tailwindcss" },
      { friendlyName: "Express", iconName: "simple-icons:express" },
      { friendlyName: "Solidity", iconName: "simple-icons:solidity" },
      { friendlyName: "Vercel", iconName: "simple-icons:vercel" },
      { friendlyName: "Railway", iconName: "simple-icons:railway" },
    ],
    description:
      "A concept of what decentralised banking can look like with crypto.",
    largeTile: false,
    year: 2022,
    image: feducia,
    backgroundColor: "#1D63DD",
  },
];

export default projects;
export type { Project, Technology };
