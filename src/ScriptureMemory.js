import React, { useState, useEffect } from 'react';

function TextTransformer() {
  // Use the useState hook to store the input text
  const [inputText, setInputText] = useState('');

  // Use the useState hook to store the transformed text
  const [transformedText, setTransformedText] = useState([]);

  // Define a function to handle the form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Extract all of the words and line breaks from the input text using the match function
    const words = inputText.match(/[^\s]+|\n/g);

    // Map over the array of words and line breaks and return a new array with the transformed text
    const transformedWords = words.map(word => {
      // Check if the word is a line break
      if (word === '\n') {
        // If the word is a line break, use the React.createElement function to create a br element
        return React.createElement('br');
      } else {
        // If the word is not a line break, get the first letter of the word
        const firstLetter = word[0];

        // Get any punctuation at the end of the word
        const punctuation = word.slice(1).replace(/[a-z]/gi, '');

        // Return the first letter and punctuation
        return firstLetter + punctuation;
      }
    });

    // Set the transformed words as the transformed text
    setTransformedText(transformedWords);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <textarea value={inputText} onChange={e => setInputText(e.target.value)} />
            <button type="submit">Transform</button>
        </div>
        <p>
      {transformedText}
      </p>
    </form>
  );
}


export default TextTransformer;