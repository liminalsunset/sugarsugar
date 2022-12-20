import React, { useState } from 'react';

function CalorieTracker() {
  // Use the useState hook to initialize the state of the input field
  // and a method to update the state when the user enters a value
  const [calories, setCalories] = useState(0);
  const [caloriesToday, setCaloriesToday] = useState(0);

  // This function will be called whenever the user enters a value in the input field
  const handleChange = (event) => {
    // Update the state with the value entered by the user
    setCalories(event.target.value);
  };

  function handleSubmit() {
    const caloriesToday = (setCalories) + (calories);
    setCaloriesToday(caloriesToday);
  };


  return (
    <div>
      <label>
        Enter the number of calories you've eaten today:
        <input
          type="number"
          value={calories}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Add</button>
      <p>You have eaten {calories} calories today.</p>
    </div>
  );
}


export default CalorieTracker;