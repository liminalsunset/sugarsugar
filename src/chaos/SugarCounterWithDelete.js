import React, { useState } from 'react';

const SugarCounterWithDelete = () => {
  const [sugar, setSugar] = useState(0);


  const [values, setValues] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();


    const value = parseInt(event.target.elements.sugarInput.value, 10);


    setSugar(sugar + value);


    setValues([...values, value]);
  }

  const handleDelete = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);

    setSugar(sugar - values[index]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Teaspoons of sugar:
        <input type="number" name="sugarInput" />
      </label>
      <button type="submit">Add</button>
      <p>Total for today: {sugar} teaspoons of sugar</p>
      <ul>
        {values.map((value, index) => (
          <li key={index}>
            {value} teaspoons of sugar
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SugarCounterWithDelete;
