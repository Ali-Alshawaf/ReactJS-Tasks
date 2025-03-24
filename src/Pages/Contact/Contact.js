import './Contact.css'
import { useEffect } from 'react';


export default function Contact({language}){

useEffect(()=>{
    document.title = `${content[language].title}`;
});

const content = {
    ar:{
    Title:"تواصل",
    Number:"الرقم: 0545694313",
    Email: "alshawafali@outlook.com :البريد الإلكتروني"
    },
    en:{
    Title:"Contect",
    Number:"Number: 0545694313",
    Email: "Email: alshawafali@outlook.com"
    }
}
    return(

        <>
        <div className="ContactContainer">
            
            <h1>{content[language].Title}</h1>
            
        </div>
        <div className="ContactContainer">
                        
            <h2>{content[language].Number}</h2>
            <h2>{content[language].Email}</h2>
            
        </div>
        </>


    )
}