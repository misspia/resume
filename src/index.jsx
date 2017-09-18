import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header.jsx';
import Skills from './skills/skills.jsx';
import Projects from './projects/projects.jsx';
import Experiences from './experiences/experiences.jsx';

import './index.scss';

class App extends Component {
	render() {
		return <div className="app">
			<Header />
			<Skills />
			<Projects />
			<Experiences />
		</div>;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);




