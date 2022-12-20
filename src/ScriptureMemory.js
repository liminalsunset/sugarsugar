import React, { useState, useEffect } from 'react';

function TextTransformer() {
  // Use the useState hook to store the input text
  const [inputText, setInputText] = useState('');

  // Use the useState hook to store the transformed text
  const [transformedText, setTransformedText] = useState('');

  // Use the useEffect hook to perform the transformation when the input text changes
  useEffect(() => {
    // Split the input text into an array of words
    const words = inputText.split(' ');

    // Map over the array of words and return a new array with the first letter of each word
    // and any punctuation at the end of the word
    const transformedWords = words.map(word => {
      // Get the first letter of the word
      const firstLetter = word[0];

      // Get any punctuation at the end of the word
      const punctuation = word.slice(1).replace(/[a-z]/gi, '');

      // Return the first letter and punctuation
      return firstLetter + punctuation;
    });

    // Join the transformed words into a single string and set it as the transformed text
    setTransformedText(transformedWords.join(' '));
  }, [inputText]);

  return (
    <div>
      <textarea value={inputText} onChange={e => setInputText(e.target.value)} />
      <p>{transformedText}</p>
    </div>
  );
}

export default TextTransformer;