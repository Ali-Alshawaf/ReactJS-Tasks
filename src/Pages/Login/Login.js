import { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import './Login.css'

export default function Login(content,language){

useEffect(()=>{
    document.title = `${content[language].Title}`;
});

return(
<>

< LoginForm/>

</>

);
}