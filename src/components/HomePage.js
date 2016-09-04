import React from 'react';
import {Link} from 'react-router';
import '../styles/HomePage.css';
import PokemonProfile from './PokemonProfile';

// Since this component is simple and static, there's no parent container for it.


const HomePage = React.createClass ({
  getInitialState() {
    return {
    };
  },

  render () {
  return (
      <div className="container">
        <div className ="row">
          <div>Welcome to the Lit Pokedex</div>
        </div>
      </div>
  )}
});

export default HomePage;

