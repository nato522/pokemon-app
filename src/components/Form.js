import React from 'react';

const Form = (props)=> (
    <form onSubmit={props.getPokemon}>
        <input type="text" name="pokemonName"/>
        <button>Search</button>
    </form>
);

export default Form;