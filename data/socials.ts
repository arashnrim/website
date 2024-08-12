interface Social {
  name: string;
  description: string;
  url?: string;
  linkText?: string;
  id?: string;
  iconName: string;
}

const socials: Social[] = [
  {
    name: "Blog",
    description: "Sharing experiences, thoughts, and stories about tech",
    url: "https://blog.arash.codes",
    linkText: "function()",
    id: "socials__blog",
    iconName: "ph:pen-nib",
  },
  {
    name: "Email",
    description: "A general, catch-all address for anything",
    linkText: "Click to copy",
    id: "socials__email",
    iconName: "ph:envelope-simple",
  },
  {
    name: "LinkedIn",
    description: "For professional inquiries and networking",
    url: "https://linkedin.com/in/arashnrim",
    linkText: "arashnrim",
    iconName: "simple-icons:linkedin",
  },
  {
    name: "GitHub",
    description: "Source code for my projects and contributions",
    url: "https://github.com/arashnrim",
    linkText: "arashnrim",
    iconName: "simple-icons:github",
  },
  {
    name: "Figma",
    description: "Design works (usually UI/UX experiments)",
    url: "https://www.figma.com/@arashnrim",
    linkText: "arashnrim",
    iconName: "simple-icons:figma",
  },
  {
    name: "Devpost",
    description: "Hackathon projects and submissions",
    url: "https://devpost.com/arashnrim",
    linkText: "arashnrim",
    iconName: "simple-icons:devpost",
  },
];

export default socials;
