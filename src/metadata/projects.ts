type ProjectsMetadata = {
  title: string;
  projects: Project[];
};

export type Project = {
  title: string;
  startDate: string;
  endDate: string;
  link: string;
  linkDisplay: string;
  description: string;
};

export const metadata: ProjectsMetadata = {
  title: "projects",
  projects: [
    // {
    // 	title: 'Wingbae',
    // 	startDate: 'mar 2021',
    // 	endDate: 'present',
    // 	// link: '',
    // 	// linkDisplay: '',
    // 	descriptions: [
    // 	`
    // 		Led frontend development of TypeScript and Apollo Client based social dating platform focused on creating time and
    // 		location based rooms where users can chat and match with one another
    // 	`,
    // 	],
    // },
    // {
    // 	title: 'Kaeswap',
    // 	startDate: 'dec 2018',
    // 	endDate: 'dec 2019',
    // 	// link: 'https://butler.staging.kaeswap.com/',
    // 	// linkDisplay: 'butler.staging.kaeswap.com',
    // 	descriptions: [
    // 	`
    // 		A Next.js and Apollo Client based platform for K-Pop fans to trade and resell their albums/merch/event tickets; received <b>thousands of
    // 		pageviews</b> and <b>hundreds of concurrent active users</b> during the KCON LA 2019 event
    // 	`,
    // 	// `
    // 	// 	Developed modular form components using <b>React Hooks and Apollo Client</b>
    // 	// 	to create a streamlined, indexable, way for users to format their listing data
    // 	// 	so that is is easily searchable by potential buyers.
    // 	// `,
    // 	],
    // },
    // {
    //   title: "WebGL Pokdex Apollo Client + Server",
    //   startDate: "jan 2019",
    //   endDate: "may 2019",
    //   link: "http://misspia.me/pokedex-webgl",
    //   linkDisplay: "misspia.me/pokedex-webgl",
    //   description: `
    // 		Developed an interactive WebGL experience with <b>Three.js and React hooks</b> to
    // 		provide a novel, yet performant, way to interact with pokemon data served from a custom
    // 		<b>Apollo server</b>
    // 		`,
    // },
    {
      title: "WebGL Sketchbook",
      startDate: "jan 2018",
      endDate: "present",
      link: "https://misspia.github.io/sketchbook/",
      linkDisplay: "misspia.github.io/sketchbook",
      description: `
				A sandbox and journal for documenting my WebGL learning progress. Contains a collection
				of <b>shaders / Three.js</b> experiments exploring noise functions,
				postprocessing techniques and more
			`,
    },
    // {
    // 	title: 'Energy (Unity Audio Visualization)',
    // 	startDate: 'feb 2019',
    // 	endDate: 'feb 2019',
    // 	link: 'https://bit.ly/2SnSP8Y',
    // 	linkDisplay: 'bit.ly/2SnSP8Y',
    // 	descriptions: [
    // 	`
    // 		Produced a custom Unity experience using a combination of various particle systems, shaders and materials
    // 	`,
    // 	`
    // 		Analyzed and integrated audio spectrum data via manipulating particle emission rates, life, size and colors
    // 	`,
    // 	],
    // 	keywords: ['Unity', '', '', '', '', '']
    // },
    // {
    // 	title: 'Pokedex Web App + API',
    // 	startDate: 'oct 2017',
    // 	endDate: 'jan 2018',
    // 	link: 'https://bit.ly/2MX18CA',
    // 	linkDisplay: 'bit.ly/2MX18CA',
    // 	descriptions: [
    // 		`
    // 		Architected a Postgres database to store Pokemon data scraped using Node.js for
    // 		efficient read access
    // 	`,
    // 	`
    // 		Implemented frontend using React + Redux with a Node.js (Express) backend to handle
    // 		database queries
    // 	`,
    // 	// `
    // 	// 	Optimized production build and development process using customized Webpack configurations
    // 	// `,
    // 	],
    // 	keywords: ['Postgres', 'Node.js', 'React', 'Redux', 'routing', 'Express', 'Webpack']
    // },
    // {
    // 	title: 'D3 Geographic Esports Visualization',
    // 	startDate: 'jan 2017',
    // 	endDate: '',
    // 	link: 'http://bit.ly/2xoWW9j',
    // 	linkDisplay: 'bit.ly/2xoWW9j',
    // 	descriptions: [
    // 		`
    // 			Rendered aggregated esports earnings data into an interactive
    // 			globe choropleth (heatmap) using D3.js
    // 		`,
    // 	],
    // 	keywords: ['Node.js', 'functional', 'D3.js']
    // },
  ],
};
