import { useState } from 'react';
import LanguageBtn from '../LanguageBtn/LanguageBtn';
import './SignupForm.css';

export default function SignupForm() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('Name').value;
        const email = document.getElementById('Email').value.toLowerCase();
        const number = document.getElementById('Number').value;
        const password = document.getElementById('Password').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (!Array.isArray(users)) {
            users = [];
        }

        const nameExists = users.some(u => u.name === name);
        const emailExists = users.some(u => u.email === email);
        const validNumber = number.length === 10;

        if (nameExists) {
            document.getElementById('ErrorName').style.display = 'block';
        } else {
            document.getElementById('ErrorName').style.display = 'none';
        }

        if (emailExists) {
            document.getElementById('ErrorEmail').style.display = 'block';
        } else {
            document.getElementById('ErrorEmail').style.display = 'none';
        }

        if (!validNumber) {
            document.getElementById('ErrorNumber').style.display = 'block';
        } else {
            document.getElementById('ErrorNumber').style.display = 'none';
        }

        if (!nameExists && !emailExists && validNumber) {
            users.push({ name, email, number, password });
            localStorage.setItem('users', JSON.stringify(users));
            console.log('users', users);
            window.location.href = 'Login';
            alert('تم التسجيل بنجاح');
        }
    };

    const [language, setLanguage] = useState("ar");
    const content = {
        ar:{
            Title:"تسجيل",
            UserN:"اسم المستخدم",
            Email:"البريد الإلكتروني",
            Password:"كلمة المرور",
            Error:"البريد الالكتروني أو كلمة المرور غير صحيحة",
            rem:"تذكرني",
            login:"تسجيل الدخول",
            signup:"تسجيل حساب",
            Name:"علي",
            Number:"رقم الجوال",
            NumberError:"رقم الجوال غير صحيح",
            EmailError:"البريد الإلكتروني مستخدم بالفعل",
            NameError:"الاسم مستخدم بالفعل"

        },
        en:{
            Title:"Sign Up",
            UserN:"User Name",
            Email:"Email",
            Password:"Password",
            Error:"Email or password is incorrect",
            rem:"Remember me",
            login:"Log in",
            signup:"Sign Up",
            Name: "Ali",
            Number: "Phone number",
            NumberError: "Invalid mobile number",
            EmailError: "Email address already in use",
            NameError: "Name already in use"

        }

    }

    return (
        <div className="SignupContainer">
            <h1>{content[language].signup}</h1>
            <form id="signupForm" onSubmit={handleSubmit}>
                <label htmlFor="Name">{content[language].UserN}</label>
                <input id="Name" type="text" placeholder={content[language].Name} required />
                <p className="error" id="ErrorName">{content[language].NameError}</p>

                <label htmlFor="Email">{content[language].Email}</label>
                <input id="Email" type="email" placeholder="ali@example.com" required />
                <p className="error" id="ErrorEmail">{content[language].EmailError}</p>

                <label htmlFor="Number">{content[language].Number}</label>
                <input id="Number" type="text" placeholder="05 **** ****" required />
                <p className="error" id="ErrorNumber">{content[language].NumberError}</p>

                <label htmlFor="Password">{content[language].Password}</label>
                <input id="Password" type="password" placeholder="********" required />

                <input className="submit" type="submit" value={content[language].signup} />
            </form>

            <hr className="Line" />

            <div className="flex-container">
                <LanguageBtn setLanguage={setLanguage} />

                <a href="Login" className="link">{content[language].login}</a>

            </div>
        </div>
    );
}