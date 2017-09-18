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
		// console.log(experience)
		return <Experience
				key={index}
				title={experience.title}
				date={experience.data}
				link={experience.link}
				description={experience.description}
				tools={experience.tools}
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

