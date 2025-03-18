import React, { useState } from "react";
import "./LanguageBtn.css";

export default function LanguageBtn({ setLanguage }) {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "ar" : "en";
    setLanguage(newLanguage); 
    setIsEnglish(!isEnglish);
  };

 

  return (
    <div className="btn-container">
      <label className="switch btn-color-mode-switch">
        <input type="checkbox" id="color_mode" onChange={toggleLanguage} />
        <label 
          className="btn-color-mode-switch-inner" 
          data-off="عربي" 
          data-on="ENG"
          htmlFor="color_mode"
        ></label>
      </label>
    </div>
  );
}
