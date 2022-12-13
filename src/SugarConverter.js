import React, { useState } from 'react';
import './Calculate.css';

function SugarConverter() {
  const [sugarPer16Oz, setSugarPer16Oz] = useState(0);
  const [sugarPer20Oz, setSugarPer20Oz] = useState(0);

  function handleChange(event) {
    setSugarPer16Oz(event.target.value);
  }

  function handleSubmit(event) {
    const sugarPer20Oz = (sugarPer16Oz * 20) / 16;
    setSugarPer20Oz(sugarPer20Oz);
  }

  return (
    <div className="smallprint">
      <label>
        Grams of sugar per 16 fluid ounces:
        <input type="number" onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Calculate</button>
      <p>Grams of sugar per 20 fluid ounces: {sugarPer20Oz}</p>
    </div>
  );
}


export default SugarConverter;