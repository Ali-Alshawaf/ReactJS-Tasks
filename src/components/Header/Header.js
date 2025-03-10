import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    document.getElementById('Logout').addEventListener('click', function() {
        localStorage.removeItem('users');
        window.location.href = 'login';
    });
}, []);

  return (
    <div className="navbar">
            <a id="Logout">تسجيل الخروج</a>
      <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List>
          <ListItem button component={Link} to="/Home" onClick={() => setIsDrawerOpen(false)}>
            <ListItemText primary="الرئيسية" />
          </ListItem>
          <ListItem button component={Link} to="/About" onClick={() => setIsDrawerOpen(false)}>
            <ListItemText primary="عنا" />
          </ListItem>
          <ListItem button component={Link} to="/Contact" onClick={() => setIsDrawerOpen(false)}>
            <ListItemText primary="تواصل" />
          </ListItem>
        </List>
      </Drawer>
            </div>
        </div>
      
  );
}
