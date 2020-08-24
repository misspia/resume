module.exports = {
	title: 'experience',
	experiences: [
		// {
		// 	title: '',
		// 	division: '',
		// 	company: '',
		// 	companySrc: '',
		// 	startdate: '',
		// 	enddate: '',
		// 	descriptions: [
		// 		`

		// 		`,
		// 	],
		// 	keywords: []
		// },
		{
			title: 'Frontend Developer',
			division: 'Interactive Web',
			company: 'MediaMonks',
			companySrc: 'https://www.mediamonks.com/',
			startdate: 'may 2019',
			enddate: 'present',
			descriptions: [
				`
					Delivered an interactive build-to-order tool for Hyundai's G80 model
					using Vue.js and GSAP animations
				`,
				`
					Integrated with Google Vision and the browser's native media streamer
					to create an AR simulation for user specified item detection
				`,
			],
			projects: [
				{
					label: 'HP Indigo LEPx',
					href: 'https://www8.hp.com/us/en/industrial-printers/indigo-digital-presses/lepx-digital-printing-technology.html',
				},
				{
					label: 'Twitter Transparency',
					href: 'https://transparency.twitter.com/',
				},
				{
					label: 'Hyundai Genesis Korea',
					href: 'https://www.genesis.com/kr/en/models/luxury-sedan-genesis/g80/bto/powertrain?code=RAS4NF2DBUJC&packages=&design=basic&color=obsidian-black&garnish=black-high-glossy',
				},
			],
			keywords: ['Google Vision', 'AR simulation', 'Vue.js', 'GSAP animations'],
		},
		{
			title: 'Frontend Engineer',
			division: 'Platform',
			company: 'Yolk AI',
			companySrc: 'http://www.yolk.ai/',
			startdate: 'july 2018',
			enddate: 'apr 2019',
			descriptions: [
				`
					Implemented features for service desk automation tools using a React / Apollo Client
					frontend and communicated with a GraphQL backend. Contributed to Jest component testing
				`,
				`
					Developed internal theming library based on emotion.js and created reusable form components
				`,
				`
					Built a sankey diagram using D3.js that dynamically takes in and visualizes application usage data
				`,
			],
			keywords: ['react', 'GraphQL', 'Apollo Client', 'emotion.js', 'Jest', 'D3.js', 'TypeScript', 'next.js'],
		},
		{
			title: 'Software Developer',
			division: 'CANVAS',
			company: 'Mosaic Manufacturing',
			companySrc: 'https://www.mosaicmfg.com/products/canvas',
			startdate: 'jan 2018',
			enddate: 'july 2018',
			descriptions: [
				`
					Architected and prototyped the frontend for CANVAS, a React/Redux app for easing the process
					of preparing and slicing models for multi-material 3D printing
				`,
				`
					Handled model uploads and interaction via Three.js. Features include drag & drop coloring of models
					using ray tracing, model transformations and normalizing grouped model uploads
				`,
				`
					Implemented authentication and model slicing calls via Node.js backend and Amazon's DynamoDB
				`,
			],
			keywords: ['React/Redux', 'Three.js', 'sagas', 'DynamoDB', 'Node.js',],
		},

		{
			title: 'Software Engineer Intern',
			division: 'Manufacturing Automation',
			company: 'North (Acquired by Google)',
			companySrc: 'https://www.bynorth.com/',
			startdate: 'may 2017',
			enddate: 'dec 2017',
			descriptions: [
				`
					Increased scalability of production tools by migrating
					Qt and legacy web apps to modern frameworks
				`,
				`
					Developed React based tools using WebSockets and the browser's Gamepad API to allow users
					to easily communicate with production machinery via precision controllers
				`,
			],
			keywords: ['React', 'flux', 'WebSockets', 'Gamepad API']
		},
	],
};
