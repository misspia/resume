module.exports = {
	title: 'projects',
	projects: [
		{
			title: 'Kaeswap',
			startdate: 'dec 2018',
			enddate: 'present',
			link: 'https://kaeswap.com/',
			linkDisplay: 'kaeswap.com',
			descriptions: [
			`	
				A platform for K-Pop entusiasts to trade and resell merchandise and event tickets. 
				Received thousands of pageviews and hundreds of daily active users during the KCON LA 2019 event
			`,
			`
				Developed modular form components using React Hooks and handled requests with Apollo Client
			`,
			], 
			keywords: ['Apollo Client', 'React Hooks', 'next.js', 'GraphQL', 'thousands', 'hundreds']
		},
		{
			title: 'WebGL Sketchbook',
			startdate: 'jan 2018',
			enddate: 'present',
			link: 'http://bit.ly/2BcthOE',
			linkDisplay: 'bit.ly/2BcthOE',
			descriptions: [
			`
				A sandbox and journal for documenting my WebGL journey. Contains a collection 
				of shaders and Three.js experiments exploring noise functions, 
				postprocessing techniques and more 	
			`,
			// `
			// 	A collection of shaders exploring various raw WebGL/GLSL techniques including 
			// 	ray marching, signed distance functions and noise functions. Implemented 
			// 	using an object oriented approach
			// `,
			`	Routing and mounting between sketches handled via React + React Router 
			`,
			], 
			keywords: ['shaders', 'Three.js', 'GLSL', 'React', 'Router']
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
		// 	title: 'WebGL Low Poly Solar System',
		// 	startdate: 'dec 2017',
		// 	enddate: 'jan 2018',
		// 	link: 'http://bit.ly/2DasL8M',
		// 	linkDisplay: 'bit.ly/2DasL8M',
		// 	descriptions: [
		// 	`
		// 		Used an object oriented approach to implement a WebGL Solar System by creating geometies 
		// 		and textures in ThreeJS to render 3D planets 
		// 	`,
		// 	`
		// 		Optimized rendering of orbits by merging planetary verticies to reduce the total draw calls per frame
		// 	`
		// 	], 
		// 	keywords: ['object oriented', 'ThreeJS', 'WebGL', 'geometries and meshes', 'sequelize', 'Optimized rendering', 'draw calls per frame']
		// },
		{
			title: 'Pokedex Web App + API',
			startdate: 'oct 2017',
			enddate: 'jan 2018',
			link: 'https://bit.ly/2MX18CA',
			linkDisplay: 'bit.ly/2MX18CA',
			descriptions: [
				`
				Architected a Postgres database to store Pokemon data scraped using Node.js for
				efficient read access 
			`,
			`
				Implemented frontend using React + Redux with a Node.js (Express) backend to handle
				database queries
			`,
			// `
			// 	Optimized production build and development process using customized Webpack configurations
			// `,
			], 
			keywords: ['Postgres', 'Node.js', 'React', 'Redux', 'routing', 'Express', 'Webpack']
		},
		{
			title: 'D3 Geographic Esports Visualization',
			startdate: 'jan 2017',
			enddate: '',
			link: 'http://bit.ly/2xoWW9j',
			linkDisplay: 'bit.ly/2xoWW9j',
			descriptions: [
				`
					Rendered aggregated esports earnings data into an interactive 
					globe choropleth (heatmap) using D3.js
				`,
			], 
			keywords: ['Node.js', 'functional', 'D3.js']
		},
		
	]
}
