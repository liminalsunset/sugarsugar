import React, { useState } from 'react';

function SugarConverter() {
  const [sugarPer16Oz, setSugarPer16Oz] = useState(0);
  const [sugarPer20Oz, setSugarPer20Oz] = useState(0);

  function handleChange(event) {
    setSugarPer16Oz(event.target.value);
  }

  function handleSubmit(event) {
    // Calculate the sugar per 24 fluid ounces
    const sugarPer20Oz = (sugarPer16Oz * 20) / 16;
    setSugarPer20Oz(sugarPer20Oz);
  }

  return (
    <div>
      <label>
        Grams of sugar per 16 fluid ounces:
        <input type="number" onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <p>Grams of sugar per 20 fluid ounces: {sugarPer20Oz}</p>
    </div>
  );
}


export default SugarConverter;