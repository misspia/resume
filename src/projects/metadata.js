module.exports = {
	title: 'projects',
	projects: [
		// {
		// 	title: 'le project',
		// 	date: 'today',
		// 	link: 'www.project.com',
		// 	description: 'the awesome project',
		// 	tools: 'sick tools'
		// },
		{
			title: 'D3 Geographic Esports Visualization',
			date: '',
			link: '',
			descriptions: [
				`
					Scraped and aggregated esports earnings data using Node.js
				`,
				`
					Rendered processed data into a 3D self-rotating globe choropleth (heatmap).
					Created a zoomable interface and tooltips with analysis breakdown when
					a country is hovered over.
				`
			], 
			keywords: ['Node.js', 'D3.js'],
			tools: ['Node.js', 'D3.js']
		},
		{
			title: 'Pokedex',
			date: '',
			link: 'https://github.com/SEAKING-LOVE/pokedex',
			descriptions: [
				`
				Architected a Postgres database to store Pokemon data scraped using Node.js for
				efficient read access. 
			`,
			`
				Implemented front-end using React and Redux with a Node.js (Express) backend to handle
				database queries
			` 
			], 
			keywords: ['Postgres', 'Node.js', 'React', 'Redux', 'Express'],
			tools: ['Node.js', 'Postgres', 'Express', 'React', 'Redux', ]
		},
	]
}