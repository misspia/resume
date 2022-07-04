// https://github.com/dmlhyun/euihyun.com/blob/master/app/assets/Euihyun%20Chung%203.1.pdf
// http://davidozhang.com/assets/resume.pdf
// https://zuqi.li/resources/ZuqiLi_Resume.pdf
// https://jofibo.com/blog/front-end-developer-resume-example
// https://elliott.dev/about

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
			title: 'Frontend Engineer',
			division: 'Brokerage Operations / Lending',
			company: 'Habito',
			companySrc: 'https://www.habito.com/',
			startdate: 'nov 2020',
			enddate: 'present',
			descriptions: [
				`
					Built a hub of aggregated customer data for our internal brokers, increasing the 
					speed of and reducing the amount of errors made when processing a mortgage application <b>by 90%</b>
				`,
				`
					Aggregated multiple services into single <b>Node.js</b> middleman servers to reduce the complexity in our frontends 
				`,
				`
					Facilitated fortnightly discussions for frontend related concerns, contributed to knowledge sharing talks and 
					created responsive and web accessible components for internal design system 
				`
			],
			keywords: []
		},
		{
			title: 'Frontend Developer',
			division: 'Interactive Web Team',
			company: 'MediaMonks',
			companySrc: 'https://www.mediamonks.com/',
			startdate: 'may 2019',
			enddate: 'nov 2020',
			descriptions: [
				`
					Prototyped a 3D asset viewer tool for HP's consumer PC products using React and Three.js
					for a sales pitch that secured another 3 projects with HP, leading to an additional <b>$8M + in revenue</b>.
				`,
				`
					Developed the WebGL of the <b>FWA award winning</b> interactive microsite showcasing HP Indigo's LEPx printer.
					Optimized site <b>performance by 30%</b> by reducing draw calls per frame and efficiently handling user events.
				`,
				// `
				// 	Delivered an interactive car configuration sales tool using Vue for the Hyundai Genesis series.
				// 	Developed a flexible system for reading CMS data, allowing the client to reuse the app for
				// 	multiple car models.
				// `,
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
			company: 'Yolk AI (Acquired by Astreya Partners Inc)',
			companySrc: 'https://astreya.com/',
			startdate: 'july 2018',
			enddate: 'apr 2019',
			descriptions: [
				`
					Created a suite of service desk automation tools using a <b>Typescript / React / Apollo Client</b>
					frontend and communicated with a GraphQL based server. Contributed to Jest component testing
				`,
				`
					Developed internal theming library based on styled-components and created reusable form components
					to standardize branding within the code base and optimize the development process of other engineers.
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
					Architected and prototyped the frontend for CANVAS, a <b>React / Redux</b> app that consolidates
					tools for creating, slicing and coloring models for multi-material 3D printing into a single web platform.
				`,
				`
					Built ontop of <b>Three.js</b>, features include 3D model uploading, transformations and drag & drop
					color/material assignment, allowing users with no 3D printing experience to prepare models for multi-material printing.
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
				// `
				// 	Increased scalability of production tools by migrating Qt desktop apps to modern web frameworks
				// `,
				`
					Utilized WebSockets and the browser's Gamepad API to allow users to easily communicate with production machinery
					via precision controllers, <b>increasing production efficiency by 80%</b>.
				`,
			],
		},
	],
};
