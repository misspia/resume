module.exports = {
	title: 'projects',
	projects: [
		{
			title: 'Kaeswap',
			startdate: 'dec 2018',
			enddate: 'present',
			link: 'https://butler.staging.kaeswap.com/',
			linkDisplay: 'butler.staging.kaeswap.com',
			descriptions: [
			`
				A platform for K-Pop enthusiasts to trade and resell merchandise and event tickets.
				Received <b>thousands of pageviews and hundreds of daily active users</b> during the KCON LA 2019 event
			`,
			`
				Developed modular form components using <b>React Hooks and Apollo Client</b>
				to create a streamlined, indexable, way for users to format their listing data
				so that is is easily searchable by potential buyers.

			`,
			],
		},
		{
			title: 'WebGL Pokdex Apollo Client + Server',
			startdate: 'jan 2019',
			enddate: 'may 2019',
			link: 'http://misspia.me/pokedex-webgl',
			linkDisplay: 'misspia.me/pokedex-webgl',
			descriptions: [
				`
					Developed an interactive WebGL experience with <b>Three.js and React hooks</b> to
					provide a novel, yet performant, way to interact with pokemon data.
				`,
				`
					Architected an <b>Apollo Server</b> for efficient read access of Pokemon data
					to result in optimal page load time.
				`,

			],
		},
		{
			title: 'WebGL Sketchbook',
			startdate: 'jan 2018',
			enddate: 'present',
			link: 'http://misspia.me/sketchbook',
			linkDisplay: 'misspia.me/sketchbook',
			descriptions: [
			`
				A sandbox and journal for documenting my WebGL learning progress. Contains a collection
				of shaders and Three.js experiments exploring noise functions,
				postprocessing techniques and more
			`,
			// `
			// 	A collection of shaders exploring various raw WebGL/GLSL techniques including
			// 	ray marching, signed distance functions and noise functions. Implemented
			// 	using an object oriented approach
			// `,
			`	Routing and mounting between sketches handled via React hooks + React Router
			`,
			],
		},
		// {
		// 	title: 'Energy (Unity Audio Visualization)',
		// 	startdate: 'feb 2019',
		// 	enddate: 'feb 2019',
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
		// 	startdate: 'oct 2017',
		// 	enddate: 'jan 2018',
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
		// 	startdate: 'jan 2017',
		// 	enddate: '',
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

	]
}
