import { useState } from "react";

import "./App.css";

const App = () => {
  const [options, setOptions] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const handleToggle = (e) => {
    const clicked = e.target.id;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [clicked]: !prevOptions[clicked],
    }));
    if (
      options.good &&
      options.cheap &&
      options.fast &&
      clicked !== "good" &&
      clicked !== "cheap" &&
      clicked !== "fast"
    ) {
      const newOptions = {
        good: false,
        cheap: false,
        fast: false,
      };
      setOptions(newOptions);
      setOptions((prevOptions) => ({
        ...prevOptions,
        [clicked]: true,
      }));
    }
  };

  return (
    <div className="container">
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="good"
          className="toggle"
          checked={options.good}
          onChange={handleToggle}
        />
        <label htmlFor="good" className="label">
          <div className="ball"></div>
        </label>
        <span>Good</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          id="cheap"
          className="toggle"
          checked={options.cheap}
          onChange={handleToggle}
        />
        <label htmlFor="cheap" className="label">
          <div className="ball"></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          id="fast"
          className="toggle"
          checked={options.fast}
          onChange={handleToggle}
        />
        <label htmlFor="fast" className="label">
          <div className="ball"></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
}

export default App;
