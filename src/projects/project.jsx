import React, { Component } from 'react';
import Descriptions from '../descriptions/descriptions.jsx';

class Project extends Component {
	renderHeader() {
		return <div className='header'>
			<div className='title'>
				{this.props.title}
				<a href={this.props.link} target='_blank'>
					{this.props.linkDisplay}
				</a>
			</div>

			{this.renderDate()}
		</div>
	}
	renderDate() {
		let date = this.props.startdate;
		if(this.props.enddate !== '') date += ` - ${this.props.enddate}`;
		return <div className='date'>
				{date}
			</div>
	}
	render() {
		return <div className='project'>
			{this.renderHeader()}
			<Descriptions 
				bullet={false}
				descriptions={this.props.descriptions}
				keywords={this.props.keywords}/>
			
		</div>;
	}
}

export default Project;
