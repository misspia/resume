import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import axios from 'axios';
import '../styles/about-page.css';
import PokemonProfile from './PokemonProfile';

// Since this component is simple and static, there's no parent container for it.


const Menu = React.createClass ({
	componentDidMount(){
		this.getData();
	},
	getInitialState() {
		return {
			data: 'default'
		};
	},
	getData(){
			var pokeId = 10;
			var baseUrl = 'http://pokeapi.co/api';
			var getUrl = baseUrl +'/v2/pokemon/' + pokeId;
			// console.log('hi')
			// return axios.get(baseUrl +'v2/pokemon/' + pokeId);
			$.ajax({
      url: getUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(getUrl, status, err.toString());
      }.bind(this)
    });
			
			console.log(this.state.data);
			var pokeName = this.state.data.name;
			console.log(pokeName);


	},
	render () {
	return (

			<div className="container">
				<div className ="row">
					<div className="col s4">
						<button onClick={this.getData}>Click</button>
					</div>
					<PokemonProfile />
				</div>


			</div>
	)}
});

export default Menu;

