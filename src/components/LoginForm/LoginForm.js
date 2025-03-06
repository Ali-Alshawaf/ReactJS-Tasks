import LanguageBtn from '../LanguageBtn/LanguageBtn';
import './LoginForm.css';

export default function LoginForm() {

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

    return (
        <div className="container">
            <h1>تسجيل الدخول</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="Email">البريد الإلكتروني</label>
                <input id="Email" type="email" placeholder="ali@example.com" required />
                <label htmlFor="Password">كلمة المرور</label>
                <input id="Password" type="password" placeholder="********" required />
                <p id="error" className="error">البريد الالكتروني أو كلمة المرور غير صحيحة</p>

                <div className="remember-me">
                    <label htmlFor="rememberMe">تذكرني</label>
                    <input type="checkbox" id="rememberMe" />
                </div>

                <input className="submit" type="submit" value="تسجيل الدخول" />
            </form>
            <hr className="Line" />
            <div className="flex-container">
                <LanguageBtn />
                <div className="Links">
                    <a href="Signup" className="link">تسجيل حساب</a>
                </div>
            </div>
        </div>
    );
}
