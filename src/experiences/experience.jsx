import React, { Component } from 'react';
import Descriptions from '../descriptions/descriptions.jsx';
import { boldKeywords } from '../utils.js';

class Experience extends Component {
	renderHeader() {
		const division = this.props.division === '' ? '' : `(${this.props.division})`;
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
	render() {
		return <div className='experience'>
			{this.renderHeader()}
			<Descriptions 
				descriptions={this.props.descriptions}
				keywords={this.props.keywords}/>
		</div>;
	}
}

export default Experience;



