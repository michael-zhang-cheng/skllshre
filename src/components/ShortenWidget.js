import React, { useState } from 'react';
import './shortenWidget.scss';

import link from '../assets/link.png'

function ShortenWidget({ onSubmit, onTextChange, textValue }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="shrtnURL">  
      <button aria-label="toggle url widget" onClick={() => setOpen(!open)} className="open-button">
        <img alt="link" src={link} />
      </button>
      <div style={{ display: open ? 'inherit' : 'none' }} className="ui-body">
        <label htmlFor="text-area">Enter your text for conversion:</label>
        <textarea id="text-area" value={textValue} onChange={e => onTextChange(e.target.value)} className="text-conversion-area" />
        <button onClick={() => onSubmit()} aria-label="generate urls" className="generate-button">
          <img alt="link" src={link} />
        </button>
      </div>
    </div>
  );
}

export default ShortenWidget;
