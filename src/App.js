import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

class App extends Component {
  getPokemon = async (e) => {
    e.preventDefault();
    const pokemonName = e.target.elements.pokemonName.value
    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon Search</h1>
        </header>
        <Form getPokemon={this.getPokemon} />
      </div>
    );
  }
}

export default App;