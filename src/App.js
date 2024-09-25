
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light')
  const toggleStyle = ()=>{ 
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div >
     <Navbar title="TextUtlis" homeText = "Home" aboutText = "About" mode = {mode} toggleStyle = {toggleStyle} />
     <div className="container">
     <TextForm heading = "Enter the text to analyse" mode = {mode}/>
     <About/>
     </div>
    </div>
    
  );
}

export default App;
