// https://github.com/dmlhyun/euihyun.com/blob/master/app/assets/Euihyun%20Chung%203.1.pdf
// http://davidozhang.com/assets/resume.pdf
// https://zuqili.com/resume.pdf
// https://jofibo.com/blog/front-end-developer-resume-example
// https://elliott.dev/about

type ExperiencesMetadata = {
  title: string;
  experiences: Experience[];
};

export type Experience = {
  title: string;
  division: string;
  company: string;
  companySrc: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  keywords?: string[];
  projects?: Project[];
};

export type Project = {
  label: string;
  href: string;
};

export const metadata: ExperiencesMetadata = {
  title: "experience",
  experiences: [
    // {
    // 	title: '',
    // 	division: '',
    // 	company: '',
    // 	companySrc: '',
    // 	startDate: '',
    // 	endDate: '',
    // 	descriptions: [
    // 		`

    // 		`,
    // 	],
    // 	keywords: []
    // },
    {
      title: "Software Engineer",
      division: "Chat",
      company: "Cohere",
      companySrc: "https://cohere.com/",
      startDate: "july 2023",
      endDate: "july 2024",
      descriptions: [
        `
					Spearheaded frontend development for launch of <a href="https://github.com/cohere-ai/cohere-toolkit/" target="_blank">toolkit</a>, 
					a popular open-source RAG app (<b>2.9k+ GitHub stars</b>) built with <b>React /  Next.js / Zustand</b>, enabling users to easily
					build and deploy LLM-based products.
					`,
        `
					Designed and implemented @-mention tagging of LLM tools and user files in <a href="https://coral.cohere.com/" target="_blank">Coral's</a> 
					chat composer, improving feature visibility and reducing user confusion compared to the previous side panel design.
				`,
        `
					Engineered real-time chat streaming via WebSockets, enhancing outputs with customized rich text, citation parsing, and interactive 
					text highlights. Designed robust status tracking for adaptive visuals, ensuring seamless user experience.
				`,
      ],
      keywords: [],
    },
    {
      title: "Software Engineer",
      division: "Platform",
      company: "Command AI (Acquired by Amplitude)",
      companySrc: "https://amplitude.com/blog/amplitude-acquires-command-ai",
      startDate: "oct 2022",
      endDate: "july 2023",
      descriptions: [
        // `
        // 	Led comprehensive redesign of the documentation website, implementing hooks and reusable components to support responsive design and theming.
        // 	Integrated recursively structured content from third-party CMS with recursive data handling.
        // `,
        `
          Led comprehensive redesign of documentation website, integrating recursively structured content from third-party CMS and implementing reusable components to fully support responsive design and theming. 
      `,
        `
					Designed and implemented zero-code setup components in <b>React</b>, seamlessly embedded via iframes into user websites, enabling smooth 
					cross-document messaging and interaction with their parent platform.
				`,
      ],
      keywords: [],
    },
    {
      title: "Software Engineer",
      division: "Brokerage Operations",
      company: "Habito",
      companySrc: "https://www.habito.com/",
      startDate: "nov 2020",
      endDate: "oct 2022",
      descriptions: [
        `
          Developed customer data hub using <b>React and styled-components</b>, enhancing internal brokerage workflows. Increased 
					speed of and reduced errors made when processing mortgage applications <b>by 90%</b>.
        `,
        // `
        // 	Aggregated multiple services into single <b>Node.js</b> middleman servers to reduce the complexity in our frontends
        // `,
        `
					Led fortnightly discussions for the frontend group and contributed to knowledge sharing talks across the engineering 
					team. Championed creation of responsive and web accessible components for design system.
					`,
      ],
      keywords: [],
    },
    {
      title: "Frontend Developer",
      division: "Interactive Web Team",
      company: "MediaMonks",
      companySrc: "https://www.mediamonks.com/",
      startDate: "may 2019",
      endDate: "nov 2020",
      descriptions: [
        `
					Prototyped a 3D asset viewer tool for HP's consumer PC products using <b>React and Three.js</b>
					for a sales pitch that secured another 3 projects with HP, leading to an additional <b>$8M+ in revenue</b>.
				`,
        `
					Developed an <b>FWA award winning</b> interactive microsite showcasing HP Indigo's LEPx printer with <b>Vue.js / Three.js</b>.
					Optimized <b>performance by 30%</b>, leading to smoother animations and improved user engagement.
				`,
        // `
        // 	Delivered an interactive car configuration sales tool using Vue for the Hyundai Genesis series.
        // 	Developed a flexible system for reading CMS data, allowing the client to reuse the app for
        // 	multiple car models.
        // `,
      ],
      projects: [
        {
          label: "HP Indigo LEPx",
          href: "https://www8.hp.com/us/en/industrial-printers/indigo-digital-presses/lepx-digital-printing-technology.html",
        },
        {
          label: "S⁴Capital Annual Report",
          href: "https://www.s4capital.com/annualreport19/",
        },
        // {
        //   label: "Twitter Transparency",
        //   href: "https://transparency.twitter.com/",
        // },
        {
          label: "Hyundai Genesis Korea",
          href: "https://www.genesis.com/kr/en/models/luxury-sedan-genesis/g80/bto/powertrain?code=RAS4NF2DBUJC&packages=&design=basic&color=obsidian-black&garnish=black-high-glossy",
        },
        // {
        // 	label: 'Red Bull 3x3 Basketball Contest',
        // 	href: 'https://www.redbull.com/us-en/projects/play3xgame',
        // },
      ],
    },
    {
      title: "Frontend Engineer",
      division: "Platform",
      company: "Yolk AI (Acquired by Astreya Partners Inc)",
      companySrc: "https://astreya.com/",
      startDate: "july 2018",
      endDate: "apr 2019",
      descriptions: [
        `
					Created a suite of service desk automation tools using a <b>Typescript / React / Apollo Client</b>
					frontend and communicated with a GraphQL based server. Contributed to Jest component testing.
				`,
        // `
        // 	Developed internal theming library based on styled-components and created reusable form components
        // 	to standardize branding within the code base and optimize the development process of other engineers.
        // `,
      ],
    },
    {
      title: "Software Developer",
      division: "Platform",
      company: "Mosaic Manufacturing",
      companySrc: "https://www.mosaicmfg.com/",
      startDate: "jan 2018",
      endDate: "july 2018",
      descriptions: [
        `
					Architected and prototyped the frontend for <a href="https://www.mosaicmfg.com/pages/canvas-software" target="_blank">Canvas</a>, a <b>React / Redux / Three.js </b> app that consolidates
					tools for creating, slicing and coloring models for multi-material 3D printing into a single web platform.
				`,
        // `
        // 	Built ontop of <b>Three.js</b>, features include 3D model uploading, transformations and drag & drop
        // 	color/material assignment, allowing users with no 3D printing experience to prepare models for multi-material printing.
        // `,
      ],
    },

    // {
    //   title: "Software Engineer Intern",
    //   division: "Manufacturing Automation",
    //   company: "North (Acquired by Google)",
    //   companySrc: "https://betakit.com/north-acquired-by-google/",
    //   startDate: "may 2017",
    //   endDate: "dec 2017",
    //   descriptions: [
    //     // `
    //     // 	Increased scalability of production tools by migrating Qt desktop apps to modern web frameworks
    //     // `,
    //     `
    // 			Utilized WebSockets and the browser's Gamepad API to allow users to easily communicate with production machinery
    // 			via precision controllers, <b>increasing production efficiency by 80%</b>.
    // 		`,
    //   ],
    // },
  ],
};
