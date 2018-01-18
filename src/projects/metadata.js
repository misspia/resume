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
				A collection of shaders exploring various techniques in WebGL/GLSL including metaballs, 
				particle systems and noise functions. Implemented using an object oriented approach
			`,
			`	Handled routing and mounting between sketches via React + React Router 
			`,
			], 
			keywords: ['shaders', 'WebGL', 'GLSL', 'object oriented', 'React', 'Router']
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
			link: 'http://bit.ly/2yhWQ1h',
			linkDisplay: 'bit.ly/2yhWQ1h',
			descriptions: [
				`
				Architected a Postgres database to store Pokemon data scraped using Node.js for
				efficient read access 
			`,
			`
				Implemented front-end using React + Redux with a Node.js (Express) backend to handle
				database queries
			`,
			`
				Optimized production build and development process using customized Webpack 2 configurations
			`,
			], 
			keywords: ['Postgres', 'Node.js', 'React', 'Redux', 'routing', 'Express', 'Webpack 2']
		},
		{
			title: 'Processing Audiograph',
			startdate: 'jun 2017',
			enddate: 'july 2017',
			link: 'http://bit.ly/2fjxBTS',
			linkDisplay: 'bit.ly/2fjxBTS',
			descriptions: [
			`
				Structured a React playlist application using a flux based architecture
			`,
			`
				Analyzed and rendered audio frequency data 
				onto an HTML canvas using processing-like techniques 
			` 
			], 
			keywords: ['React', 'flux', 'processing', 'canvas']
		},
		{
			title: 'D3 Geographic Esports Visualization',
			startdate: 'jan 2017',
			enddate: '',
			link: 'http://bit.ly/2xoWW9j',
			linkDisplay: 'bit.ly/2xoWW9j',
			descriptions: [
				`
					Scraped and aggregated esports earnings data with Node.js using a 
					functional paradigm
				`,
				`
					Rendered processed data into a 3D self-rotating globe choropleth (heatmap) 
					using D3.js
				`
			], 
			keywords: ['Node.js', 'functional', 'D3.js']
		},
		
	]
}