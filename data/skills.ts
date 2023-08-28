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
    iconName: "html5",
    yearLearnt: 2020,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "CSS3",
    iconName: "css3",
    yearLearnt: 2020,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Python",
    iconName: "python",
    yearLearnt: 2020,
    category: SkillCategory.Programming,
  },
  {
    friendlyName: "Next.js",
    iconName: "nextdotjs",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "React",
    iconName: "react",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Firebase",
    iconName: "firebase",
    yearLearnt: 2019,
    category: SkillCategory.Backend,
  },
  {
    friendlyName: "Node.js",
    iconName: "nodedotjs",
    yearLearnt: 2021,
    category: SkillCategory.Programming,
  },
  {
    friendlyName: "TypeScript",
    iconName: "typescript",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "JavaScript",
    iconName: "javascript",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Astro",
    iconName: "astro",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "Amazon Web Services",
    iconName: "amazonaws",
    yearLearnt: 2023,
    category: SkillCategory.Cloud,
  },
  {
    friendlyName: "ASP.NET Core",
    iconName: "dotnet",
    yearLearnt: 2023,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "C#",
    iconName: "csharp",
    yearLearnt: 2022,
    category: SkillCategory.Programming,
  },
  {
    friendlyName: "Java",
    iconName: "java",
    yearLearnt: 2023,
    category: SkillCategory.Mobile,
  },
];

export default skills;
