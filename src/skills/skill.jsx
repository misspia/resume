import React, { Component } from 'react';

class Skill extends Component {
	render() {
		return <div className='skill'>
			<div className='title'>{this.props.title}:</div>
			<div className='content'>{this.props.list.join(', ')}</div>
		</div>;
	}
}

export default Skill;
