import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import '../styles/Menu.css';
import PokemonProfile from './PokemonProfile';

// Since this component is simple and static, there's no parent container for it.

var pokeId = 30;
var baseUrl = 'http://pokeapi.co/api';
const Menu = React.createClass ({
	componentDidMount() {
	},

	getInitialState() {
		return {
			pokemon: 'pokemon',
      species: 'species'
		};
	},

	getPokemon() {
			var getUrl = baseUrl +'/v2/pokemon/' + pokeId;
			$.ajax({
		      url: getUrl,
		      dataType: 'json',
		      cache: false,
		      success: function(data) {
		        this.setState({
              pokemon: data
            });
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(getUrl, status, err.toString());
		      }.bind(this)
    		});
			
			console.log(this.state.data);
			var pokeGeneral = this.state.data;
			var pokeStat = this.state.data.stats;
			var pokeType = this.state.data.types;
			console.log(pokeGeneral.name);
			console.log(pokeGeneral.id);
			console.log(pokeStat);
			console.log(pokeType);
	},

	getSpecies() {
			var getUrl = baseUrl +'/v2/pokemon-species/' + pokeId;
			$.ajax({
		      url: getUrl,
		      dataType: 'json',
		      cache: false,
		      success: function(data) {
		        this.setState({
              species: data
            });
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(getUrl, status, err.toString());
		      }.bind(this)
    		});
		        var pokeSpecies = this.state.data.genera[0].genus;
		        var pokeDesc = this.state.data.flavor_text_entries[1].flavor_text;
	    		console.log(pokeSpecies);
	    		console.log(pokeDesc);
	},

  getData() {
    this.getPokemon();
    this.getSpecies();
  },

	render () {
	return (

			<div className="container">
				<div className ="row">
					<div className="col s4">
						<input ref='search' type='text' placeholder='Whos that Pokemon?' />
						<button onClick={this.getData}>Click</button>
					</div>
					<PokemonProfile />
				</div>
			</div>
	)}
});

export default Menu;

