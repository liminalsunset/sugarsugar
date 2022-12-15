import React, { useState } from 'react';

function AddedSugarLogger() {
  // Use the useState hook to initialize the state of the input field
  // and a method to update the state when the user enters a value
  const [addedSugar, setAddedSugar] = useState(0);

  // This function will be called whenever the user enters a value in the input field
  const handleChange = (event) => {
    // Update the state with the value entered by the user
    setAddedSugar(event.target.value);
  };

  return (
    <div>
      <label>
        Enter the number of grams of added sugar you've eaten today:
        <input
          type="number"
          value={addedSugar}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default AddedSugarLogger;