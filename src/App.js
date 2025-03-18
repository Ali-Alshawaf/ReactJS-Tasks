import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Error from './Pages/Error/Error';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Layout from './components/Layout/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState("ar"); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout language={language} setLanguage={setLanguage}><Home Home language={language} /></Layout>}/>
        <Route path="/Home" element={<Layout language={language} setLanguage={setLanguage}><Home language={language} /></Layout>}/>

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Contact" element={<Layout language={language} setLanguage={setLanguage}><Contact language={language} /></Layout>}/>
        <Route path="/About" element={<Layout language={language} setLanguage={setLanguage}><About language={language} /></Layout>}/>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
