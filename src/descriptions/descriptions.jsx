import React, { Component } from 'react';
import { boldKeywords } from '../utils.js';

import './descriptions.scss';

class Descriptions extends Component {
	renderDescriptions() {
		return this.props.descriptions.map((description, index) => {
			return <li key={index} className='description'
			dangerouslySetInnerHTML={boldKeywords(description, this.props.keywords)} />
		})
	}
	render() {
		return <ul className='descriptions'>
				{this.renderDescriptions()}
			</ul>;
	}
}

export default Descriptions;



