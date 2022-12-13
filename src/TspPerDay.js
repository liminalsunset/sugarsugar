import React, { useState } from 'react';
import './Calculate.css';

function TspPerDay() {
    const [poundsPerYear, setPoundsPerYear] = useState(0);
    const [gramsPerYear, setGramsPerYear] = useState(0);
    const [gramsPerDay, setGramsPerDay] = useState(0);
    const [tspPerDay, setTspPerDay] = useState(0);

    function handleChange(event) {
        setPoundsPerYear(event.target.value);
    }

    function handleSubmit() {
        const gramsPerYear = (poundsPerYear * 453.592);
        setGramsPerYear(gramsPerYear)

        const gramsPerDay = (gramsPerYear / 365);
        setGramsPerDay(gramsPerDay)

        const tspPerDay = (gramsPerDay / 4);
        setTspPerDay(tspPerDay);

    }

    return (
        <div className="smallprint">
            <label>
                Pounds of sugar per year:
                <input type="number" onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>Calculate</button>
            <p>Grams of sugar per year: {gramsPerYear}</p>
            <p>Grams of sugar per day: {gramsPerDay}</p>
            <p>Teaspoons of sugar per day: {tspPerDay}</p>
        </div>
    );
}

export default TspPerDay;