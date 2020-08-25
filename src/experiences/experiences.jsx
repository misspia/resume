import React, { Component } from 'react';

import Metadata from './metadata.js';
import Experience from './experience.jsx';
import Subheader from '../subheader/subheader.jsx';
import './experiences.scss';

class Experiences extends Component {
	renderExperiences() {
		return Metadata.experiences.map((experience, index) => {
			return this.renderExperience(experience, index);
		})
	}
	renderExperience(experience, index) {
		return <Experience
				key={index}
				title={experience.title}
				division={experience.division}
				company={experience.company}
				companySrc={experience.companySrc}
				startdate={experience.startdate}
				enddate={experience.enddate}
				link={experience.link}
				descriptions={experience.descriptions}
				projects={experience.projects}
			/>
	}
	render() {
		return <div className='experiences'>
			<Subheader text='experiences' />
			{this.renderExperiences()}
		</div>;
	}
}

export default Experiences;

