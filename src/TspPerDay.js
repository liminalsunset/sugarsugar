import React, { useState } from 'react';

function TspPerDay() {
    const [poundsPerYear, setPoundsPerYear] = useState(0);
    const [gramsPerYear, setGramsPerYear] = useState(0);
    const [gramsPerDay, setGramsPerDay] = useState(0);
    // const [tspPerDay, setTspPerDay] = useState(0);

    function handleChange(event) {
        setPoundsPerYear(event.target.value);
    }

    function handleSubmit(event) {
        const gramsPerYear = (poundsPerYear * 453.592);
        setGramsPerYear(gramsPerYear)

        const gramsPerDay = (gramsPerYear / 365);
        setGramsPerDay(gramsPerDay)
    }

    return (
        <div>
            <label>
                Pounds of sugar per year:
                <input type="number" onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>Calculate</button>
            <p>Grams of sugar per year: {gramsPerYear}</p>
            <p>Grams of sugar per day: {gramsPerDay}</p>
        </div>
    );
}

export default TspPerDay;