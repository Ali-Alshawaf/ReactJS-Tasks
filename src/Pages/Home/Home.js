import React from "react";
import "./Home.css";

export default function Home({ language }) {
  const content = {
    ar: { welcome: "مرحبًا بكم في الصفحة الرئيسية" },
    en: { welcome: "Welcome to the Home Page" },
  };

  return (
    <div className="HomeContainer">
      <h1>{content[language].welcome}</h1>
    </div>
  );
}
