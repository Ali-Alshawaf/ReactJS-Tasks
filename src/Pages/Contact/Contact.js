import './Contact.css'

export default function Contact({language}){
const menuItems = {
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
            
            <h1>{menuItems[language].Title}</h1>
            
        </div>
        <div className="ContactContainer">
                        
            <h2>{menuItems[language].Number}</h2>
            <h2>{menuItems[language].Email}</h2>
            
        </div>
        </>


    )
}