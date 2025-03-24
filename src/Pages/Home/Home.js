import React from "react";
import "./Home.css";
import { useEffect } from 'react';



export default function Home({ language }) {

  useEffect(()=>{
    document.title = `${content[language].title}`;
});

  const content = {
    ar: { 
      tilte:"الرئيسية",
      welcome: "مرحبًا بكم في الصفحة الرئيسية" },
    en: { 
      tilte:"Main",
      welcome: "Welcome to the Home Page" },
  };

  return (
    <div className="HomeContainer">
      <h1>{content[language].welcome}</h1>
    </div>
  );
}
