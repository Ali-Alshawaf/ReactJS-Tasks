import SignupForm from "../../components/SignupForm/SignupForm";
import './Signup.css'
import { useEffect } from 'react';

export default function Signup(){

    useEffect(()=>{
        document.title = 'Signup Page';
    });
    
    return(
    <>
    
    < SignupForm/>
    </>
    
    );
    
}