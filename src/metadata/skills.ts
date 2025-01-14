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
        "zustand",
        "Redux",
        "Next.js",
        "Apollo GraphQL",
        "Vue.js",
        // "styled-components",
        // "Tailwind CSS",
        "Webpack",
        "Three.js",
        "WebGL",
      ],
    },
    {
      title: "Other tools",
      list: ["Docker", "shaders", "GraphQL", "PostgreSQL", "Git"],
    },
  ],
};
