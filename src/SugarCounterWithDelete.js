import React, { useState } from 'react';

const SugarCounterWithDelete = () => {
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

  // This function will be called when the user clicks the "delete" button
  const handleDelete = (index) => {
    // Remove the value at the specified index from the list
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);

    // Update the sugar state variable with the new value
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