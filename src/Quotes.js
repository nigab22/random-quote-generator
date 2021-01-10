import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Quotes.css';

function Quotes({ changeColor }) {
  const [quote, setQuote] = useState(
    'Happiness is when what you think, what you say, and what you do are in harmony.'
  );
  const [author, setAuthor] = useState('Mahatma Gandhi');
  const [color, setColor] = useState('#80c3ea');

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const quote = data.content;
        const author = data.author;
        setQuote(quote);
        setAuthor(author);
        pickColor();
      });
  };

  const pickColor = () => {
    const colors = [
      [
        'linear-gradient(209.21deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%)',
        '#7858e3',
      ],
      [
        'linear-gradient(209.21deg, rgb(159, 127, 229) 13.57%, rgb(78, 153, 227) 98.38%)',
        '#5896e4',
      ],
      [
        'linear-gradient(209.21deg, rgb(255, 215, 138) 13.57%, rgb(244, 118, 45) 98.38%)',
        '#f57e35',
      ],
      [
        'linear-gradient(209.21deg, rgba(47, 184, 255, 0.42) 31.77%, rgb(241 255 31 / 65%) 100%)',
        '#82bbe8',
      ],
      [
        'linear-gradient(209.19deg, rgb(239 224 98) 13.57%, rgb(210 57 195) 98.35%)',
        '#de7d9b',
      ],
      [
        'linear-gradient(209.21deg, rgb(65, 108, 226) 13.57%, rgb(86, 215, 222) 98.38%)',
        'rgb(79 182 223)',
      ],
      [
        'linear-gradient(209.21deg, rgb(75, 190, 255) 13.57%, rgb(33, 107, 218) 98.38%)',
        '#226cdb',
      ],
      [
        'linear-gradient(209.19deg, rgb(255 170 170) 13.57%, rgb(210 57 195) 98.35%)',
        'rgb(212 60 195)',
      ],
      [
        'linear-gradient(209.21deg, rgb(238, 184, 109) 13.57%, rgb(153, 70, 178) 98.38%)',
        '#9d4bb0',
      ],
      [
        'linear-gradient(209.21deg, rgb(47, 184, 255) 13.57%, rgb(158, 236, 217) 98.38%)',
        'rgb(125 221 228)',
      ],
      [
        'linear-gradient(209.19deg, rgb(79 252 231) 13.57%, rgb(57 210 107) 98.35%)',
        'rgb(63 221 138)',
      ],
      [
        'linear-gradient(209.21deg, rgb(255, 146, 85) 13.57%, rgb(255, 78, 78) 98.38%)',
        '#ff524f',
      ],
      [
        'linear-gradient(209.21deg, rgb(226, 78, 102) 13.57%, rgb(234, 101, 88) 98.38%)',
        '#e24e66',
      ],
      [
        'linear-gradient(209.21deg, rgb(65, 47, 175) 13.57%, rgb(81, 198, 234) 98.38%)',
        '#444aba',
      ],
    ];

    const numColors = colors.length - 1;
    const randomNum = Math.round(Math.random() * numColors);
    changeColor(colors[randomNum][0]);
    setColor(colors[randomNum][1]);
  };

  return (
    <div className="quotes-container">
      <div
        className="quote-text"
        style={{
          color: color,
        }}
      >
        <p>
          <FontAwesomeIcon icon={faQuoteLeft} />
          {`  ${quote}`}
        </p>
      </div>
      <div style={{ color: color }} className="quote-author">
        <p>- {author}</p>
      </div>
      <div className="quote-buttons">
        <button
          className="new-quote-button"
          style={{ background: color }}
          onClick={getNewQuote}
        >
          New Quote
        </button>
        <a
          className="tweet-button"
          href={`https://www.twitter.com/intent/tweet?text="${quote}"%20-${author}%20&hashtags=quoteOfTheDay`}
          style={{ color: color }}
        >
          <FontAwesomeIcon icon={faTwitterSquare} />
          <span class="tooltip-text">Tweet Quote</span>
        </a>
      </div>
    </div>
  );
}

export default Quotes;
