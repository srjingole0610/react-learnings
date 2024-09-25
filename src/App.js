
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <div >
     <Navbar title="TextUtlis" homeText = "Home" aboutText = "About" />
     <div className="container">
     <TextForm heading = "Enter the text to analyse" />
     </div>
     
    </div>
    
  );
}

export default App;
