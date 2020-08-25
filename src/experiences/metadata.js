// https://github.com/dmlhyun/euihyun.com/blob/master/app/assets/Euihyun%20Chung%203.1.pdf
// http://davidozhang.com/assets/resume.pdf
// https://zuqi.li/resources/ZuqiLi_Resume.pdf
// https://jofibo.com/blog/front-end-developer-resume-example

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
			division: 'Interactive Web Team',
			company: 'MediaMonks',
			companySrc: 'https://www.mediamonks.com/',
			startdate: 'may 2019',
			enddate: 'present',
			descriptions: [
				`
					Prototyped a 3D asset viewer tool for HP's consumer PC products using React and Three.js.
					The sales pitch secured another 3 projects with HP, leading to an additional <b>$8M + in revenue</b>.
				`,
				`
					Developed the WebGL of the <b>FWA award winning</b> interactive microsite showcasing HP Indigo's LEPx pritner.
					Optimized site <b>performance by 30%</b> by reducing drawcalls per render and efficiently handling user events.
				`,
				`
					Delivered an interactive car configuration sales tool using Vue for the Hyundai Genesis series.
					Developed a flexible system for loading and reading CMS data, increasing the reusability of app.
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
				// {
				// 	label: 'Red Bull 3x3 Basketball Contest',
				// 	href: 'https://www.redbull.com/us-en/projects/play3xgame',
				// },
			],
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
					Implemented features for service desk automation tools using a <b>React / Apollo Client</b>
					frontend and communicated with a GraphQL backend. Contributed to Jest component testing
				`,
				`
					Developed internal theming library based on styled-components and created reusable form components
				`,
				`
					Built a sankey diagram using D3.js that dynamically took in and visualized application usage data
				`,
			],
		},
		{
			title: 'Software Developer',
			division: 'Team CANVAS',
			company: 'Mosaic Manufacturing',
			companySrc: 'https://www.mosaicmfg.com/products/canvas',
			startdate: 'jan 2018',
			enddate: 'july 2018',
			descriptions: [
				`
					Architected and prototyped the frontend for CANVAS, a <b>React/Redux</b> app for easing the process
					of preparing and slicing models for multi-material 3D printing
				`,
				`
					Handled 3D model uploads and interaction via <b>Three.js</b>. Features include drag & drop coloring of models
					using ray tracing, model transformations and normalizing grouped model uploads
				`,
				`
					Implemented authentication and model slicing calls via Node.js backend and Amazon's DynamoDB
				`,
			],
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
		},
	],
};
