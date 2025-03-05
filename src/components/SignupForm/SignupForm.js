import React from 'react';
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

    return (
        <div className="container">
            <h1>تسجيل</h1>
            <form id="signupForm" onSubmit={handleSubmit}>
                <label htmlFor="Name">اسم المستخدم</label>
                <input id="Name" type="text" placeholder="علي" required />
                <p className="error" id="ErrorName">الاسم مستخدم بالفعل</p>

                <label htmlFor="Email">البريد الإلكتروني</label>
                <input id="Email" type="email" placeholder="ali@example.com" required />
                <p className="error" id="ErrorEmail">البريد الإلكتروني مستخدم بالفعل</p>

                <label htmlFor="Number">رقم الجوال</label>
                <input id="Number" type="text" placeholder="05 **** ****" required />
                <p className="error" id="ErrorNumber">رقم الجوال غير صحيح</p>

                <label htmlFor="Password">كلمة المرور</label>
                <input id="Password" type="password" placeholder="********" required />

                <input className="submit" type="submit" value="تسجيل" />
            </form>

            <hr className="Line" />

            <div className="flex-container">
                <LanguageBtn />

                <a href="Login" className="link">تسجيل الدخول</a>

            </div>
        </div>
    );
}