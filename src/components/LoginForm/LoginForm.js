import { useState, useEffect } from 'react';
import LanguageBtn from '../LanguageBtn/LanguageBtn';
import './LoginForm.css';

export default function LoginForm() {

    useEffect(()=>{
        document.title = `${content[language].Title}`;
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = document.getElementById('Email').value.toLowerCase();
        const password = document.getElementById('Password').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const validUser = users.find(u => u.email === email && u.password === password);

        if (validUser) {
            document.getElementById('error').style.display = 'none';
            window.location.href = 'Home';
            if (document.getElementById('rememberMe').checked) {
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }
        } else {
            document.getElementById('error').style.display = 'block';
        }
    };

    window.onload = function() {
        const emailInput = document.getElementById('Email');
        const passwordInput = document.getElementById('Password');
        const rememberMe = document.getElementById('rememberMe');

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (storedEmail && storedPassword) {
            emailInput.value = storedEmail;
            passwordInput.value = storedPassword;
            rememberMe.checked = true;
        }
    };
    const [language, setLanguage] = useState("ar");
    const content = {
        ar:{
            Title:"تسجيل الدخول",
            Email:"البريد الإلكتروني",
            Password:"كلمة المرور",
            Error:"البريد الالكتروني أو كلمة المرور غير صحيحة",
            rem:"تذكرني",
            login:"تسجيل الدخول",
            signup:"تسجيل حساب"
        },
        en:{
            Title:"Log in",
            Email:"Email",
            Password:"Password",
            Error:"Email or password is incorrect",
            rem:"Remember me",
            login:"Log in",
            signup:"Sign Up"
        }

    }

    return (
        <div className="LoginContainer">
            <h1>{content[language].Title}</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="Email">{content[language].Email}</label>
                <input id="Email" type="email" placeholder="ali@example.com" required />
                <label htmlFor="Password">{content[language].Password}</label>
                <input id="Password" type="password" placeholder="********" required />
                <p id="error" className="error">{content[language].Error}</p>

                <div className="remember-me">
                    <label htmlFor="rememberMe">{content[language].rem}</label>
                    <input type="checkbox" id="rememberMe" />
                </div>

                <input className="submit" type="submit" value={content[language].login} />
            </form>
            <hr className="Line" />
            <div className="flex-container">
                <LanguageBtn setLanguage={setLanguage} />
                <div className="Links">
                    <a href="Signup" className="link">{content[language].signup}</a>
                </div>
            </div>
        </div>
    );
}
