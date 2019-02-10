import React, { Component } from 'react';

import Metadata from './metadata.js';
import Subheader from '../subheader/subheader.jsx';
import './education.scss';

class Education extends Component {
	renderTitle() {
		return <div className='title'>
			<div className='school'>{Metadata.school}</div>
			<div className='program'>, {Metadata.program}</div>
		</div>
	}
	renderDate() {
		return <div className='date'>
			<div className='class'>Class of {Metadata.class}</div>
		</div>
	}
	render() {
		return <div className='education'>
			<Subheader text={Metadata.title} />
			<div className='content'>
				{this.renderTitle()}
				{this.renderDate()}
			</div>
		</div>;
	}
}

export default Education;

