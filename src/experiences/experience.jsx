import React, { Component } from 'react';
import Descriptions from '../descriptions/descriptions.jsx';
import { boldKeywords } from '../utils.js';

class Experience extends Component {
	renderHeader() {
		const division = this.props.division ? `(${this.props.division})` : '';
		return <div className='header'>
			<div className='title'>
				<div>{this.props.title} {division}</div>
				|
				{this.renderCompany()}
			</div>
			<div className='date'>
				{this.props.startdate} - {this.props.enddate}
			</div>

		</div>
	}
	renderCompany() {
		return <a
			className='company'
			href={this.props.companySrc}
			target='_blank'>
				{this.props.company}
			</a>
	}
	renderNotableProjects() {
		if(!this.props.projects) {
			return;
		}

		const projects = this.props.projects.map((project, index) => {
			const isLastProject = index === this.props.projects.length - 1;
			return (
				<div
					key={index}
					className='project'
				>
					<a
						className='projectLink'
						href={project.href}
						target='_blank'
					>
						{project.label}
					</a>
					{!isLastProject && ','}
				</div>
			)
		});

		return (
			<div className='projects'>
				<div className='label'>
					Notable projects:
				</div>
				{projects}
			</div>
		)
	}

	render() {
		return <div className='experience'>
			{this.renderHeader()}
			<Descriptions
				descriptions={this.props.descriptions}
				keywords={this.props.keywords}/>
			{this.renderNotableProjects()}
		</div>;
	}
}

export default Experience;



