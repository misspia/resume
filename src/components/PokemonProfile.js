import React, {PropTypes} from 'react';

const PokemonProfile = React.createClass ({
  propTypes: {
    pokemon: React.PropTypes.object,
    species: React.PropTypes.object
  },

  render() {
  const pokemon = this.props.pokemon;
  const pokeStat = pokemon.stats;
  const pokeType = pokemon.types;
  const species = this.props.species;
  const pokeSpecies = species.genera[0].genus;
  const pokeDesc = species.flavor_text_entries[1].flavor_text;
  const getImage = "http://www.pokestadium.com/sprites/xy/" + pokemon + ".gif";
    return (
      <div className='col s8'>
        <div className='row'>
          <div className ='col s4'>
            <img src={getImage}/>
          </div>
          <div className='cols s8'>        
          </div>
        </div>
      </div>
    );
  }
});



export default PokemonProfile;
