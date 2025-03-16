import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Header.css";
import LanguageBtn from "../LanguageBtn/LanguageBtn";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("ar"); 

  const Logout = () => {
    localStorage.removeItem("users");
    window.location.href = "login";
  };

  const menuItems = {
    ar: {
      home: "الرئيسية",
      about: "عنا",
      contact: "تواصل",
      logout: "تسجيل الخروج",
    },
    en: {
      home: "Home",
      about: "About",
      contact: "Contact",
      logout: "Logout",
    },
  };

  return (
    <div className="navbar">
      <div>
        <LanguageBtn setLanguage={setLanguage} />
      </div>
      <div className="drawer">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List>
            <ListItem button component={Link} to="/Home" onClick={() => setIsDrawerOpen(false)}>
              <ListItemText primary={menuItems[language].home} />
            </ListItem>
            <ListItem button component={Link} to="/About" onClick={() => setIsDrawerOpen(false)}>
              <ListItemText primary={menuItems[language].about} />
            </ListItem>
            <ListItem button component={Link} to="/Contact" onClick={() => setIsDrawerOpen(false)}>
              <ListItemText primary={menuItems[language].contact} />
            </ListItem>
            <ListItem button  onClick={Logout}>
              <ListItemText id="Logout" primary={menuItems[language].logout} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
}