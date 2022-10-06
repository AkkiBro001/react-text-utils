import React, { useEffect, useState } from 'react'
import './textUtils.css';
import NavBar from './components/NavBar';
import { TextForm } from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';


function TextUtilsMain() {
  
  const [mode, setMode] = useState('dark')

  
  const handleModeFn = () => {
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#292e33';
        
        showAlert('Dark Mode is enabled', '')
      }else{
        setMode('light')
        document.body.style.backgroundColor =  '#ebeced';
       
        showAlert('Light Mode is enabled', '')
      }
  }

   useEffect(()=>{
    if(mode === 'dark'){

      document.body.style.backgroundColor = '#292e33';
    }
   }, [])
  

  
  const [alert, setAlert] = useState (null);

  
  function showAlert (message, type) {
    setAlert({
        msg: message,
        type: type
    })

    
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return <>
    
    
              <NavBar title = "TextUtlis" aboutText = "About Us" modes = {mode} handleMode = {handleModeFn}/>
              <Alert alert = {alert}/>
      
            
        
              {/* <About modes = {mode}/> */}
              <TextForm heading = "Try TextUtils - Word Counter, Charater Counter, Remove Extra Spaces" modes = {mode} alertfn = {showAlert}/>
              
              
      
  
    
      
    
    
  </>
}

export default TextUtilsMain;