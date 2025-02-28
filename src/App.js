import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Error from './Pages/Error/Error';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>}/>
      
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/Login' element = {<Login/>}/>
      <Route path='/Signup' element = {<Signup/>}/>
      <Route path='/*' element = {<Error/>}/>




    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
