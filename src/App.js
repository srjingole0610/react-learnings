
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlerts = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleStyle = ()=>{ 
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlerts("Dark mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlerts("light mode has been enabled","success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <div >
     <Navbar title="TextUtlis" homeText = "Home" aboutText = "About" mode = {mode} toggleStyle = {toggleStyle} />
      <Alert alert= {alert}/>
     <div className="container">
     <TextForm heading = "Enter the text to analyse" mode = {mode} showAlerts={showAlerts}/>
     <About/>
     </div>
    </div>
    
  );
}

export default App;
