import React, { Component } from 'react';

import Metadata from './metadata.js';
import Skill from './skill.jsx';
import Subheader from '../subheader/subheader.jsx';
import './skills.scss';

class Skills extends Component {
	renderSkills() {
		return Metadata.skills.map((skill, index) => {
			return this.renderSkill(skill, index);
		})
	}
	renderSkill(skill, index) {
		return <Skill
				key={index}
				title={skill.title}
				list={skill.list}
			/>
	}
	render() {
		return <div className='skills'>
			<Subheader text={Metadata.title} />
			{this.renderSkills()}
		</div>;
	}
}

export default Skills;

