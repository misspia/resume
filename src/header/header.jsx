import React, { Component } from 'react';

import Metadata from './metadata.js';
import './header.scss';

class Header extends Component {
	renderLinks() {
		const links = ['github', 'email', 'linkedin'];
		return links.map((link) => {
			return this.renderLink(link)
		})
	}
	renderLink(link) {
		const meta = Metadata[link];
		return <div key={link} className='link'>
			<i className={meta.icon}></i>
			<a href={meta.src}>
				{meta.display}
			</a> 
		</div>
	}
	render() {
		return <div className='header'>
			<div className='name'>
				<div className='firstname'>{Metadata.firstname}</div>
				<div className='lastname'>{Metadata.lastname}</div>
			</div>
			<div className='subtitle'>{Metadata.subtitle}</div>
			<div className='links'>
				{this.renderLinks()}
			</div>	
		</div>;
	}
}

export default Header;



