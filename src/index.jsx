import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header.jsx';
import Skills from './skills/skills.jsx';
import Projects from './projects/projects.jsx';
import Experiences from './experiences/experiences.jsx';
import Education from './education/education.jsx';

import './index.scss';

class App extends Component {
	render() {
		return <div className="app">
			<a className='file ion-document-text' href='./misspia_resume.pdf'></a>
			<Header />
			<Experiences />
			<Projects />
			<Skills />
			<Education />
		</div>;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
