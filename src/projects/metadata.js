module.exports = {
	title: 'projects',
	projects: [
		
		{
			title: 'WebGL Sketchbook',
			startdate: 'jan 2018',
			enddate: 'present',
			link: 'http://bit.ly/2BcthOE',
			linkDisplay: 'bit.ly/2BcthOE',
			descriptions: [
			`
				A sandbox and journal for documenting my WebGL journey. Contains a collention 
				of shaders and Three.js experiments exploring noise functions, ray marching, 
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
		{
			title: 'Energy (Unity Audio Visualization)',
			startdate: 'feb 2019',
			enddate: 'feb 2019',
			link: 'https://bit.ly/2SnSP8Y',
			linkDisplay: 'bit.ly/2SnSP8Y',
			descriptions: [
			`
				Produced a custom Unity experience using a combination of various particle systems, shaders and materials
			`,
			`
				Analyzed and integrated audio spectrum data via manipulating particle emission rates, life, size and colors
			`,
			], 
			keywords: ['Unity', '', '', '', '', '']
		},
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
		// {
		// 	title: 'Processing Audiograph',
		// 	startdate: 'jun 2017',
		// 	enddate: 'july 2017',
		// 	link: 'http://bit.ly/2fjxBTS',
		// 	linkDisplay: 'bit.ly/2fjxBTS',
		// 	descriptions: [
		// 	`
		// 		Structured a React playlist application using a flux based architecture
		// 	`,
		// 	`
		// 		Analyzed and rendered audio frequency data 
		// 		onto an HTML canvas using processing-like techniques 
		// 	` 
		// 	], 
		// 	keywords: ['React', 'flux', 'processing', 'canvas']
		// },
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