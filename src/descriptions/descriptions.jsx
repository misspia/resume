import React, { Component } from 'react';

import './descriptions.scss';

class Descriptions extends Component {
	renderBulletedDescriptions() {
		return (
			<ul className='descriptions'>
				{this.props.descriptions.map((description, index) => (
					<li key={index} className='description'
						dangerouslySetInnerHTML={{ __html: description }} />
				))}
			</ul>
		)
	}
	renderUnbulltedDescriptions() {
		return (
			<div>
				{this.props.descriptions.map((description, index) => (
					<div key={index} className='description'
						dangerouslySetInnerHTML={{ __html: description }} />
				))}
			</div>
		)

	}
	render() {
		return this.props.bullet ?
			this.renderBulletedDescriptions() :
			this.renderUnbulltedDescriptions()
	}
}

Descriptions.defaultProps = {
	bullet: true,
	descriptions: []
}

export default Descriptions;
