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
    name: "Guestbook",
    description: "Make your presence known and say hi",
    url: "https://guestbook.arash.codes",
    linkText: "Guestbook",
    id: "socials__guestbook",
    iconName: "ph:hand-waving",
  },
  {
    name: "Blog",
    description: "Sharing experiences, thoughts, and stories about tech",
    url: "https://blog.arash.codes",
    linkText: "function()",
    id: "socials__blog",
    iconName: "ph:pen-nib",
  },
  {
    name: "Digital garden",
    description:
      "Consolidation of raw thoughts and ideas, complementing the blog",
    url: "https://garden.arash.codes",
    linkText: "Δ Delta",
    id: "socials__garden",
    iconName: "ph:plant",
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
