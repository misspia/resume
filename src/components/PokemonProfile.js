import React, {PropTypes} from 'react';
import Menu from './Menu.js';

const PokemonProfile = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };
  const pokeName = 'lugia';
  const getImage = "http://www.pokestadium.com/sprites/xy/" + pokeName + ".gif";
  return (
    <div className='col s8'>
      <div className='row'>
        <div className ='col s4'>
        <div className='name'>pokeGeneral.name</div>
          <img src={getImage}/>
          <div className='pokeid'>pokeGeneral.id</div>
        </div>
        <div className='cols s8'>
        <div class="row">
          <table id="overview">
            <tbody>
              <tr>
                <td> pokeSpecies </td>
                <td>pokeGeneral.height </td>
                <td>pokeGeneral.weight </td>
              </tr>
              <tr>
                <td>SPECIES</td>
                <td>HEIGHT</td>
                <td>WEIGHT</td>
              </tr>
            </tbody>
          </table>
        </div>
          <div class="description row">
            pokeDesc
          </div>       
        </div>
      </div>
      

    </div>
  );
};



export default PokemonProfile;
