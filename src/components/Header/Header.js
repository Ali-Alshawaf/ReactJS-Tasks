import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Home, Info, ContactMail, ExitToApp} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Header.css";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>

export default function Header({ language, setLanguage }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText id="itemList" primary={menuItems[language].home} />
          </ListItem>

          <ListItem button component={Link} to="/About" onClick={() => setIsDrawerOpen(false)}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText id="itemList" primary={menuItems[language].about} />
          </ListItem>

          <ListItem button component={Link} to="/Contact" onClick={() => setIsDrawerOpen(false)}>
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText id="itemList" primary={menuItems[language].contact} />
          </ListItem>

          <ListItem button onClick={Logout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText id="Logout" primary={menuItems[language].logout} />
          </ListItem>

        </List>
      </Drawer>
    </div>
    </div>

  );
}