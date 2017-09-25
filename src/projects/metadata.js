module.exports = {
	title: 'projects',
	projects: [
		{
			title: 'League of Legends Analytics Tool',
			startdate: 'sept 2017',
			enddate: 'present',
			link: 'http://bit.ly/2xthg7l',
			linkDisplay: 'bit.ly/2xthg7l',
			descriptions: [
			`
				Developed a Python scraper and architected a Postgres database with sequelize to store
				and serve League of Legends champion and gameplay data
			`,
			`
				Designed and implemented a high-impact, user-centered React + Redux front end to visualize 
				game analytics
			` 
			], 
			keywords: ['Python', 'Jupyter Notebook', 'sequelize', 'Postgres', 'React', 'Redux', 'user-centered']
		},
		{
			title: 'Pokedex',
			startdate: 'apr 2017',
			enddate: 'present',
			link: 'http://bit.ly/2fJHcUi',
			linkDisplay: 'bit.ly/2fJHcUi',
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
			title: 'Audio Visualizer',
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
					Scraped and aggregated esports earnings data using Node.js
				`,
				`
					Rendered processed data into a 3D self-rotating globe choropleth (heatmap) 
					using D3.js
				`
			], 
			keywords: ['Node.js', 'D3.js']
		},
		
	]
}