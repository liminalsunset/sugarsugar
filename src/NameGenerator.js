import React, { useState } from 'react';

const NameGenerator = () => {
  // Declare a state variable for the number of names to generate
  const [numNames, setNumNames] = useState(0);

  // Declare a state variable for the list of generated names
  const [names, setNames] = useState([]);

  // This function will be called when the user submits the form
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the number of names to generate
    const num = parseInt(event.target.elements.numInput.value, 10);

    // Generate the specified number of names
    const generatedNames = [];
    for (let i = 0; i < num; i++) {
      generatedNames.push(generateName());
    }

    // Update the state variables with the new values
    setNumNames(num);
    setNames(generatedNames);
  }

  // This function generates a single name using the syllable suggestions
  // and algorithm described earlier
  function generateName() {
    // List of syllables to use
    const syllables = [
      "ai", "an", "en", "el", "ia", "ie", "il", "in", "io", "ir", "t", "ze", "le", "ti", "ta", "nn",
      "la", "le", "li", "lo", "ly", "na", "ne", "ni", "no", "ra", "re", "ri", "ss", "ia", "zia", "ll",
      "ki", "khe", "ke", "lia", "z", "ice", "me", "is", "is", "in", "na", "na" , "sy", "zy", "khe", "ch", 
      "sis"
    ];

    // Start with an empty name
    let name = "";

    // Select random syllables and add them to the name
    // until the desired length is reached
    while (name.length < 6) {
      // Select a random syllable
      const index = Math.floor(Math.random() * syllables.length);
      const syllable = syllables[index];

      // Add the syllable to the name
      name += syllable;
    }

    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Return the generated name
    return name;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        How many names would you like to generate?
        <input type="number" name="numInput" />
      </label>
      <button type="submit">Generate</button>
      <p>Generated {numNames} names:</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </form>
  );
}

export default NameGenerator;