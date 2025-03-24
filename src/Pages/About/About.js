import "./About.css";
import { useEffect } from 'react';


export default function About({ language }) {
  useEffect(()=>{
    document.title = `${content[language].title}`;
});

  const content = {
    ar: {
      title: "عنا",
      name: "الاسم: علي عبدالجليل الشواف",
      specialty: "التخصص: علوم الحاسب",
    },
    en: {
      title: "About Us",
      name: "Name: Ali Abduljalil Alshawaf",
      specialty: "Specialty: Computer Science",
    },
  };

  return (
    <>
      <div className="AboutContainer">
        <h1>{content[language].title}</h1>
      </div>
      <div className="AboutContainer">
        <h2>{content[language].name}</h2>
        <h2>{content[language].specialty}</h2>
      </div>
    </>
  );
}
