import React, {PropTypes} from 'react';

const PokemonProfile = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };
  const pokeName = 'lugia';
  const getImage = "http://www.pokestadium.com/sprites/xy/"+ pokeName +".gif";
  return (
    <div className='col s8'>
      <img src={getImage}/>

    </div>
  );
};



export default PokemonProfile;
