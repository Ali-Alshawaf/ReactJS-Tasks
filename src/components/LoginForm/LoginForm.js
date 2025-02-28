import React from 'react';
import './LoginForm.css';

export default function LoginForm() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = emailInput.value.toLowerCase();
        const password = passwordInput.value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const validUser = users.find(u => u.email === email && u.password === password);

        if (validUser) {
            document.getElementById('error').style.display = 'none';
            window.location.href = 'Index.html';
            if (rememberMe.checked) {
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

    const emailInput = React.useRef(null);
    const passwordInput = React.useRef(null);
    const rememberMe = React.useRef(null);

    React.useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (storedEmail && storedPassword) {
            emailInput.current.value = storedEmail;
            passwordInput.current.value = storedPassword;
            rememberMe.current.checked = true;
        }
    }, []);

    return (
        <div className="container">
            <h1>تسجيل الدخول</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="Email">البريد الإلكتروني</label>
                <input ref={emailInput} id="Email" type="email" placeholder="ali@example.com" required />
                <label htmlFor="Password">كلمة المرور</label>
                <input ref={passwordInput} id="Password" type="password" placeholder="********" required />
                <p id="error" className="error">البريد الالكتروني أو كلمة المرور غير صحيحة</p>
                <input className="submit" type="submit" value="تسجيل الدخول" />
            </form>
            <hr />
            <div className="flex-container">
                <div className="Links">
                    <a href="Signup" className="link">تسجيل حساب</a>
                </div>
                <div className="btn-container">
                    <label className="switch btn-color-mode-switch">
                        <input ref={rememberMe} value="1" id="color_mode" name="color_mode" type="checkbox" />
                        <label className="btn-color-mode-switch-inner" data-off="عربي" data-on="إنجليزي" htmlFor="color_mode"></label>
                    </label>
                </div>
            </div>
        </div>
    );
}