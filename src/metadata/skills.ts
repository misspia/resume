type SkillsMetadata = {
  title: string;
  skills: SkillCategory[];
};

export type SkillCategory = {
  title: string;
  list: string[];
};

export const metadata: SkillsMetadata = {
  title: "skills",
  skills: [
    {
      title: "Languages",
      list: ["JavaScript", "TypeScript", "HTML/CSS", "GLSL"],
    },
    {
      title: "Web",
      list: [
        "Node.js",
        "React",
        "Zustand",
        "React query",
        "Redux",
        "Next.js",
        "Vue",
        // "styled-components",
        // "Tailwind CSS",
        "Webpack",
        "Web Accessibility",
        "Three.js",
        // "WebGL",
        "Web Audio",
      ],
    },
    {
      title: "Other tools",
      list: ["Docker", "GraphQL", "PostgreSQL", "Git"],
    },
  ],
};
