import React, { Component } from 'react';

import Metadata from './metadata.js';
import Project from './project.jsx';
import Subheader from '../subheader/subheader.jsx';
import './projects.scss';

class Projects extends Component {
	renderProjects() {
		return Metadata.projects.map((project, index) => {
			return this.renderProject(project, index);
		})
	}
	renderProject(project, index) {
		return <Project
				key={index}
				title={project.title}
				startdate={project.startdate}
				enddate={project.enddate}
				link={project.link}
				linkDisplay={project.linkDisplay}
				descriptions={project.descriptions}
				keywords={project.keywords}
				tools={project.tools}
			/>
	}
	render() {
		return <div className='projects'>
			<Subheader text='projects' />
			{this.renderProjects()}
		</div>;
	}
}

export default Projects;

