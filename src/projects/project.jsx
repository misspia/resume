import React, { Component } from 'react';

class Project extends Component {
	renderDescriptions() {
		return this.props.descriptions.map((description, index) => {
			return <li key={index} className='description'
			dangerouslySetInnerHTML={this.boldDescription(description)} />
		})
	}
	boldDescription(input) {
		const wordsToBold = this.props.keywords;
		const bolded = input.replace(new RegExp('(\\b)(' + wordsToBold.join('|') + ')(\\b)','ig'), '$1<b>$2</b>$3');
		return {__html: bolded }
	}
	render() {
		return <div className='project'>
			<div className='title'>{this.props.title}</div>
			<ul className='description'>
				{this.renderDescriptions()}
			</ul>
			<div className='tools'>
				<div className='title'>Tools: </div>
				<div className='value'>{this.props.tools.join(', ')}</div>
			</div>
		</div>;
	}
}

export default Project;



