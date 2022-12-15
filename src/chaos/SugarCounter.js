import React, { useState } from 'react';

const SugarCounter = () => {
  // Declare a new state variable, which we'll call "sugar"
  const [sugar, setSugar] = useState(0);

  // This function will be called when the user submits a new value
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value entered by the user
    const value = event.target.elements.sugarInput.value;

    // Update the sugar state variable with the new value
    setSugar(sugar + value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Teaspoons of sugar:
        <input type="number" name="sugarInput" />
      </label>
      <button type="submit">Add</button>
      <p>Total: {sugar} teaspoons of sugar</p>
    </form>
  );
}

export default SugarCounter;