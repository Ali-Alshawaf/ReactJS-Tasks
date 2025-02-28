import './Header.css'

export default function Header(){
    document.getElementById('Logout').addEventListener('click', function() {

        localStorage.removeItem('users');
        
        window.location.href = 'login.html'; 
        
        });
    return(
        <div class="navbar">
        <a href="#" id="Logout">تسجيل الخروج</a>
        <div>
            <a href="#">الرئيسية</a>
            <a href="#">تواصل</a>
        </div>
    </div>
    )
}