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
        } else {
            document.getElementById('error').style.display = 'block';
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