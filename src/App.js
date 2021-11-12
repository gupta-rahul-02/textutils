import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //Wheather dark mode is enabled or not
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode'
    }
  }


  // const [mode2, setMode2] = useState('light'); //Wheather dark mode is enabled or not
  // const toggleMode2 = () =>{
  //   if(mode2==='light'){
  //     setMode2('green');
  //     document.body.style.backgroundColor = '#0dcaf0';
  //     showAlert("Dark mode has been enabled","success");
  //   }
  //   else{
  //     setMode2('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
 
  
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  
  return (
    <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    <div className="container my-3" >
    <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>
    {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
