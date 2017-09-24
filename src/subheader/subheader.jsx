import React, { Component } from 'react';

import './subheader.scss';

class Subheader extends Component {
	render() {
		return <div className='subheader'>
			{this.props.text}
		</div>;
	}
}

export default Subheader;



