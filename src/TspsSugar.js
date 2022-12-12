import React, { useState } from 'react';

function TspsSugar() {
    const [sugarGrams, setSugarGrams] = useState(0);
    const [tspPerGram, setTspPerGram] = useState(0);

    function handleChange(event) {
        setSugarGrams(event.target.value);
    }

    function handleSubmit(event) {
        const tspPerGram = (sugarGrams / 4);
        setTspPerGram(tspPerGram)
    }


    return (
        <div>
            <label>
                Grams of sugar:
                <input type="number" onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>Calculate</button>
            <p>Teaspoons of sugar per {tspPerGram}</p>
        </div>
    )
}

export default TspsSugar;