import React, { useEffect } from 'react';
import './Header.css';

export default function Header() {
    useEffect(() => {
        document.getElementById('Logout').addEventListener('click', function() {
            localStorage.removeItem('users');
            window.location.href = 'login';
        });

        
    }, []);

    return (
        <div className="navbar">
            <a href="#" id="Logout">تسجيل الخروج</a>
            <div>
                <a href="#">الرئيسية</a>
                <a href="#">تواصل</a>
            </div>
        </div>
    );
}