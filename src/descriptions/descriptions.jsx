import React, { Component } from 'react';

import './descriptions.scss';

class Descriptions extends Component {
	renderDescriptions() {
		return this.props.descriptions.map((description, index) => {
			return <li key={index} className='description'
			dangerouslySetInnerHTML={{ __html: description }} />
		})
	}
	render() {
		return <ul className='descriptions'>
				{this.renderDescriptions()}
			</ul>;
	}
}

export default Descriptions;



