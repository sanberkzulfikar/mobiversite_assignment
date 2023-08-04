import React from "react";
import { useState, useEffect } from "react";
import English_ss from "./English_ss";
import Turkish_ss from "./Turkish_ss";
import German_ss from "./German_ss";

const Screenshots = () => {
  const defaultLanguage = "English";
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const myObj = {
    English: <English_ss />,
    Turkish: <Turkish_ss />,
    German: <German_ss />,
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="screenshot">
      <div>
        <h1>Localization Screenshots</h1>
        <div className="language-dropdown">
          <label htmlFor="language-select">Select Language: </label>
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Turkish">Turkish</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="screenshots-container">{selectedLanguage}</div>
        <div className="screenshots-container">{myObj[selectedLanguage]}</div>
      </div>
    </div>
  );
};

export default Screenshots;
