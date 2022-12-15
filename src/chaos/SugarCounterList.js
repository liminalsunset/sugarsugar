import React, { useState } from 'react';

const SugarCounterList = () => {
  // Declare a new state variable, which we'll call "sugar"
  const [sugar, setSugar] = useState(0);

  // Declare a new state variable for the list of submitted values
  const [values, setValues] = useState([]);

  // This function will be called when the user submits a new value
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value entered by the user
    const value = event.target.elements.sugarInput.value;

    // Update the sugar state variable with the new value
    setSugar(sugar + value);

    // Add the new value to the list of submitted values
    setValues([...values, value]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Teaspoons of sugar:
        <input type="number" name="sugarInput" />
      </label>
      <button type="submit">Add</button>
      <p>Total: {sugar} teaspoons of sugar</p>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value} teaspoons of sugar</li>
        ))}
      </ul>
    </form>
  );
}

export default SugarCounterList;