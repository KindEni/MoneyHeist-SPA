import React from 'react';
import { useState, useEffect } from 'react';
import Character from "./Character";

function List () {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://projectheist.herokuapp.com/characters/`);
            const { results } = await data.json();

            setCharacters(results);
        }

        fetchData();
    }, [characters.length])

    
    return (

        <div>
            <h2>Characters</h2>
            <Character />
            <Character />
        </div>
    )
}

export default List;