import type { Technology } from "./works";

enum SkillCategory {
  Programming = "Programming",
  Web = "Web",
  Mobile = "Mobile",
  Design = "Design",
  Backend = "Back end",
  Cloud = "Cloud",
}

interface Skill extends Technology {
  yearLearnt: number;
  category: SkillCategory;
}

const skills: Skill[] = [
  {
    friendlyName: "HTML5",
    iconName: "simple-icons:html5",
    yearLearnt: 2020,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "CSS3",
    iconName: "simple-icons:css3",
    yearLearnt: 2020,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Python",
    iconName: "simple-icons:python",
    yearLearnt: 2020,
    category: SkillCategory.Programming,
  },
  {
    friendlyName: "Next.js",
    iconName: "simple-icons:nextdotjs",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "React",
    iconName: "simple-icons:react",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Firebase",
    iconName: "simple-icons:firebase",
    yearLearnt: 2019,
    category: SkillCategory.Backend,
  },
  {
    friendlyName: "Node.js",
    iconName: "simple-icons:nodedotjs",
    yearLearnt: 2021,
    category: SkillCategory.Programming,
  },
  {
    friendlyName: "TypeScript",
    iconName: "simple-icons:typescript",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "JavaScript",
    iconName: "simple-icons:javascript",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Astro",
    iconName: "simple-icons:astro",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Amazon Web Services",
    iconName: "simple-icons:amazonaws",
    yearLearnt: 2023,
    category: SkillCategory.Cloud,
  },
  {
    friendlyName: "ASP.NET Core",
    iconName: "simple-icons:dotnet",
    yearLearnt: 2023,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "C#",
    iconName: "simple-icons:csharp",
    yearLearnt: 2022,
    category: SkillCategory.Programming,
  },
  {
    friendlyName: "Java",
    iconName: "simple-icons:java",
    yearLearnt: 2023,
    category: SkillCategory.Mobile,
  },
  {
    friendlyName: "Swift",
    iconName: "simple-icons:swift",
    yearLearnt: 2019,
    category: SkillCategory.Mobile,
  },
  {
    friendlyName: "Objective-C",
    iconName: "vscode-icons:file-type-objectivec",
    yearLearnt: 2024,
    category: SkillCategory.Mobile,
  },
];

export default skills;
