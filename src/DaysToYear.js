import React, { useState } from 'react';
import './Calculate.css';

// this takes how many grams a day and tells you the number of tsp in a year and how many lbs that is

function DaysToYear() {
    const [tspPerDay, setTspPerDay] = useState(0);
    const [gramsPerDay, setGramsPerDay] = useState(0);
    const [tspPerWeek, setTspPerWeek] = useState(0);
    const [gramsPerWeek, setGramsPerWeek] = useState(0);
    const [tspPerYear, setTspPerYear] = useState(0);
    const [gramsPerYear, setGramsPerYear] = useState(0);
    const [lbsPerYear, setLbsPerYear] = useState(0);

    function handleChange(event) {
        setTspPerDay(event.target.value);
    }

    function handleSubmit() {
        const tspPerYear = (tspPerDay * 365)
        setTspPerYear(tspPerYear)

        const gramsPerDay = (tspPerDay * 4);
        setGramsPerDay(gramsPerDay)

        const tspPerWeek = (tspPerDay * 7);
        setTspPerWeek(tspPerWeek)

        const gramsPerWeek = (gramsPerDay * 7);
        setGramsPerWeek(gramsPerWeek)


        const gramsPerYear = (gramsPerDay * 365);
            setGramsPerYear(gramsPerYear)

        const lbsPerYear = (gramsPerYear / 453.592);
            setLbsPerYear(lbsPerYear)
    }

    return (
        <div className="smallprint">
            <label>
            Tsps of sugar per day:
                <input type="number" onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>Calculate</button>
            <div>
                <p>{gramsPerDay} grams of sugar per day.</p>
                <p>{tspPerWeek} teaspoons of sugar per week.</p>
                <p>{gramsPerWeek} grams of sugar per week.</p>
                <p>{tspPerYear} teaspoons per year.</p>
                <p>{gramsPerYear} grams of sugar per year.</p>
                <p>{lbsPerYear} pounds of sugar a year.</p>
            </div>
        </div>
    );
} 


export default DaysToYear;