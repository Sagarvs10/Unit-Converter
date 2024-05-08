import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('inches');
  const [toUnit, setToUnit] = useState('px');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  const convertUnits = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult("Please enter a valid number");
      return;
    }

    let pixels;
    switch (fromUnit) {
      case 'inches':
        pixels = value * 96; // Approximation where 1 inch = 96 pixels
        break;
      case 'centimeters':
        pixels = value * 37.795275591; // 1 cm = 37.8 pixels
        break;
      case 'millimeters':
        pixels = value * 3.7795275591; // 1 mm = 3.78 pixels
        break;
      default:
        setResult("Unsupported unit");
        return;
    }

    let convertedValue;
    switch (toUnit) {
      case 'px':
        convertedValue = pixels;
        break;
      case 'em':
        convertedValue = pixels / 16; // Assuming the base font-size is 16px
        break;
      case 'pt':
        convertedValue = pixels * 0.75; // Approx 1px = 0.75pt
        break;
      default:
        setResult("Unsupported conversion");
        return;
    }

    setResult(`${value} ${fromUnit} is approximately ${convertedValue.toFixed(2)} ${toUnit}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>𝑼𝒏𝒊𝒕 𝑪𝒐𝒏𝒗𝒆𝒓𝒕𝒆𝒓</h1>
        <div>
          <input type="text" value={inputValue} onChange={handleInput} />
          <select value={fromUnit} onChange={handleFromUnitChange}>
            <option value="inches">Inches</option>
            <option value="centimeters">Centimeters</option>
            <option value="millimeters">Millimeters</option>
          </select>
          𝓣𝓸
          <select value={toUnit} onChange={handleToUnitChange}>
            <option value="px">Pixels (px)</option>
            <option value="em">Ems (em)</option>
            <option value="pt">Points (pt)</option>
          </select>
          <button onClick={convertUnits}>Convert</button>
        </div>
        {result && <p>{result}</p>}
      </header>
    </div>
  );
}

export default App;
