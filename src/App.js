import React, { useState } from 'react';
import Quotes from './Quotes.js';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    'linear-gradient(209.21deg, #80c3ea 13.57%, #FDD835 98.38%)'
  );

  return (
    <div
      className="app"
      style={{
        background: backgroundColor,
      }}
    >
      <div className="app___quotes">
        <Quotes changeColor={setBackgroundColor} />
      </div>
    </div>
  );
}

export default App;
