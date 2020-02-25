import React from 'react';
import './Pokecard.css';

function Pokecard({id, name, type, base_experience}) {
  let imgSrc=`https://raw.githubusercontent.com/PokeAPI` +
    `/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <img src={imgSrc} className="Pokecard-img"/>
      <p className="Pokecard-info">Type: {type}</p>
      <p className="Pokecard-info">EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard;