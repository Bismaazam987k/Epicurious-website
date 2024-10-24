// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Alert from './components/Alert';
import Dishes from './components/dishes';
import Stories from './components/Stories';
import Shopping from './components/Shopping';
import Buttons from './components/Buttons';
import Chicken from './components/Chichen';
import Brands from './components/Brand';
import Style from './components/Style';
import Footer from './components/footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [mode , setMode] = useState ('dark')
  const [alertMessage, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
 
  const    toggleMode =() =>{
    if(mode === 'dark'){
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert('Switched to light Mode');
    }else{
     setMode('dark');
     document.body.style.backgroundColor = 'Black';
     showAlert('Switched to dark Mode');
 }
}

  return (
    <>

     <Navbar  mode = {mode} toggleMode = {toggleMode}/>
     <Alert alert = {alertMessage} />
     <Recipes/>
     <Dishes/>
     <Stories/>
     <Shopping/>
     <Buttons/> 
     <Chicken/>
     <Brands/>
     <Style/>
     <Footer/>
    </>
  
  );
}

export default App;
