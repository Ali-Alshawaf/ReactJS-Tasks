import React, { useState } from "react";
import "./LanguageBtn.css";

export default function LanguageBtn({ setLanguage }) {
  const [isEnglish, setIsEnglish] = useState(false);
  const [language, setLang] = useState("ar");

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "ar" : "en";
    setLang(newLanguage);
    setLanguage(newLanguage); 
    setIsEnglish(!isEnglish);
  };

  const menuItems = {
    ar: {
      arb: "عربي",
      eng: "انجليزي"
    },
    en: {
      arb: "Arb",
      eng: "Eng"
    },
  };

  return (
    <div className="btn-container">
      <label className="switch btn-color-mode-switch">
        <input type="checkbox" id="color_mode" onChange={toggleLanguage} />
        <label 
          className="btn-color-mode-switch-inner" 
          data-off={menuItems[language].arb} 
          data-on={menuItems[language].eng} 
          htmlFor="color_mode"
        ></label>
      </label>
    </div>
  );
}
