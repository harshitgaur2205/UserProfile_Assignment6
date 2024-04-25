import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  }, []);

  return (
    <div style={{display:'flex' , alignItems:'center' }}>
      <h3>Random Quotes: </h3>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default RandomQuoteGenerator;
