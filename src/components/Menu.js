import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import '../styles/Menu.css';
import PokemonProfile from './PokemonProfile';

// Since this component is simple and static, there's no parent container for it.

const Menu = React.createClass ({
	componentDidMount() {
	},

	getInitialState() {
		return {
			pokemon: 'pokemon',
      species: 'species'
		};
	},

	getPokemon(pokemon) {
    const baseUrl = 'http://pokeapi.co/api';
		const getUrl = baseUrl +'/v2/pokemon/' + pokemon;
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
	},

	getSpecies(pokemon) {
    const baseUrl = 'http://pokeapi.co/api';
		const getUrl = baseUrl +'/v2/pokemon-species/' + pokemon;
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
	},

  getData() {
    const pokemon = ReactDOM.findDOMNode('search').value;
    this.getPokemon().bind(this, pokemon);
    this.getSpecies().bind(this, pokemon);
  },

	render () {
  	return (
  		<div className="container">
  			<div className ="row">
  				<div className="col s4">
  					<input ref='search' type='text' placeholder='Whos that Pokemon?' />
  					<button onClick={this.getData}>Click</button>
  				</div>
  				<PokemonProfile
            pokemonData={this.state.pokemon}
            speciesData={this.state.species}
          />
  			</div>
  		</div>
  	)}
  });

export default Menu;

