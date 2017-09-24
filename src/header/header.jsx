import React, { Component } from 'react';

import Metadata from './metadata.js';
import './header.scss';

class Header extends Component {
	renderName() {
		return <div className='name'>
				<div className='firstname'>{Metadata.firstname}</div>
				<div className='lastname'>{Metadata.lastname}</div>
			</div>;
	}
	renderLinks() {
		return Metadata.links.map((link, key) => {
			return this.renderLink(link, key);
		})
	}
	renderLink(link, key) {
		return <div key={key} className='link'>
			<i className={link.icon}></i>
			<a href={link.src}>{link.display}</a>
		</div>
	}
	render() {
		return <div className='header'>
			<div>
				{this.renderName()}
			</div>		
			<div className='links'>
				{this.renderLinks()}
			</div>	
		</div>;
	}
}

export default Header;



