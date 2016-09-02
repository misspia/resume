import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import axios from 'axios';
import '../styles/Menu.css';
import PokemonProfile from './PokemonProfile';

// Since this component is simple and static, there's no parent container for it.

var pokeId = 30;
const baseUrl = 'http://pokeapi.co/api';
const Menu = React.createClass ({
	componentDidMount(){
		this.getData();
	},
	getInitialState() {
		return {
			data: 'default'
		};
	},
	
	render () {
	return (

			<div className="container">
				<div className ="row">
					<div className="col s4">
						<button onClick={this.getData}>Click</button>
						<button onClick={this.getData2}>Click2</button>
					</div>
					<PokemonProfile />
				</div>


			</div>
	)}
});

export default Menu;

