import React from 'react';

function Character(character) {
    return (
        <div className='col-3'>
            <div className='card'>
            <img src={character.image} alt={character.name} width='300' />
            <h3>{character.name}</h3>
            <h4>{character.alias}</h4>
            <h4>{character.occupation}</h4>
            </div>
            
        </div>
    )
};

export default Character;
