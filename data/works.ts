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
  image?: ImageMetadata;
  backgroundColor?: string;
}

import commute from "../public/images/works/commute.png";
import desperateDefenders from "../public/images/works/desperate-defenders.png";
import feducia from "../public/images/works/feducia.png";
// import liste from "../public/images/works/liste.png";
import tp from "../public/images/works/tp.png";
import upgrade from "../public/images/works/upgrade.png";
import beacon from "../public/images/works/beacon.png";
import xtrabuddy from "../public/images/works/xtrabuddy.png";

const projects: Project[] = [
  {
    name: "Beacon",
    githubLink: "https://github.com/pikanotjx/sutdwasdoftime",
    websiteLink: "https://devpost.com/software/beacon-42m7ih",
    tech: [
      { friendlyName: "Python", iconName: "python" },
      { friendlyName: "Google Cloud Platform", iconName: "googlecloud" },
      { friendlyName: "ESP32", iconName: "espressif" },
      { friendlyName: "Arduino", iconName: "arduino" },
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
      { friendlyName: "TypeScript", iconName: "typescript" },
      { friendlyName: "Telegraf", iconName: "telegram" },
      { friendlyName: "Railway", iconName: "railway" },
    ],
    description:
      "A Telegram bot that helps you find the best public route to your destination.",
    largeTile: true,
    year: 2022,
    image: commute,
    backgroundColor: "#005DFF",
  },
  {
    name: "XtraBuddy",
    websiteLink:
      "https://play.google.com/store/apps/details?id=sg.edu.np.mad.xtrabuddy",
    tech: [
      { friendlyName: "Java", iconName: "java" },
      { friendlyName: "Android SDK", iconName: "android" },
      { friendlyName: "Firebase", iconName: "firebase" },
    ],
    description:
      "An Android app that helps you find buddies to do activities with.",
    largeTile: false,
    year: 2022,
    image: xtrabuddy,
    backgroundColor: "#0080FF",
  },
  {
    name: "tp",
    githubLink: "https://github.com/arashnrim/tp",
    tech: [{ friendlyName: "Go", iconName: "go" }],
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
      { friendlyName: "Swift", iconName: "swift" },
      { friendlyName: "Firebase", iconName: "firebase" },
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
      { friendlyName: "Swift", iconName: "swift" },
      { friendlyName: "Firebase", iconName: "firebase" },
    ],
    description: "An open-sourced to-do list app made for everyone.",
    largeTile: true,
    year: 2019,
    // image: liste,
    backgroundColor: "#FF2600",
  },
  {
    name: "feducia",
    githubLink: "https://github.com/arashnrim/feducia",
    websiteLink: "https://devpost.com/software/feducia",
    tech: [
      { friendlyName: "Next.js", iconName: "nextdotjs" },
      { friendlyName: "Tailwind CSS", iconName: "tailwindcss" },
      { friendlyName: "Express", iconName: "express" },
      { friendlyName: "Solidity", iconName: "solidity" },
      { friendlyName: "Vercel", iconName: "vercel" },
      { friendlyName: "Railway", iconName: "railway" },
    ],
    description:
      "A concept of what decentralised banking can look like with crypto.",
    largeTile: false,
    year: 2022,
    image: feducia,
    backgroundColor: "#1D63DD",
  },
  {
    name: "Desperate Defenders",
    githubLink: "https://github.com/arashnrim/desperate-defenders",
    tech: [{ friendlyName: "Python", iconName: "python" }],
    description:
      "A small CLI tower defence game made with Python for a school assignment.",
    largeTile: false,
    year: 2022,
    image: desperateDefenders,
  },
];

export default projects;
export type { Project, Technology };
