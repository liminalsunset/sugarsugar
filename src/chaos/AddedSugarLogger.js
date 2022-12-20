import React, { useReducer } from 'react';

function AddedSugarLogger() {
  // Define the initial state of the component
  const initialState = {
    addedSugar: 0,
    dailyLog: []
  };

  // Define a reducer function that will be called whenever the state of the component needs to be updated
  const reducer = (state, action) => {
    switch (action.type) {
      // Update the state with the value entered by the user
      case 'submit':
        return {
          ...state,
          addedSugar: state.addedSugar + action.value,
          dailyLog: [...state.dailyLog, action.value]
        };
      // Reset the state of the component
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };

  // Use the useReducer hook to initialize the state of the component
  // and a method to update the state when the user submits a value
  const [state, dispatch] = useReducer(reducer, initialState);

  // This function will be called whenever the user submits the form
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Dispatch an action to update the state with the value entered by the user
    dispatch({ type: 'submit', value: event.target.value });
  };

  // This function will be called when the user clicks the reset button
  const handleReset = () => {
    // Dispatch an action to reset the state of the component
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the number of grams of added sugar you've eaten today:
        <input
          type="number"
          value={state.addedSugar}
          onChange={(event) => dispatch({ type: 'submit', value: event.target.value })}
        />
      </label>
      <button type="submit">Submit</button>
      <p>You have eaten {state.addedSugar} grams of added sugar today.</p>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default AddedSugarLogger;