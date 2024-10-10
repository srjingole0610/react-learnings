import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/**
 * App component renders the main application layout.
 * It includes a Navbar component, an Alert component
 * and a Routes component with two routes: one for the
 * TextForm component and one for the About component.
 * The App component also handles the toggleStyle function
 * which changes the mode of the application from light to dark
 * and vice versa.
 *
 * @returns {ReactElement} JSX element representing the App component.
 */
function App() {
  /**
   * State variable to store the mode of the application.
   * It can be either 'light' or 'dark'.
   */
  const [mode, setMode] = useState('light');

  /**
   * State variable to store the alert message.
   * It can be either null or an object with two properties: msg and type.
   */
  const [alert, setAlert] = useState(null);

  /**
   * Function to show alert messages.
   * It takes two arguments: message and type.
   * The type can be 'success', 'danger', 'info', or 'warning'.
   * The function sets the alert state to an object with two properties: msg and type.
   * It also sets a timeout to clear the alert message after 1500 milliseconds.
   */
  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  /**
   * Function to toggle the mode of the application.
   * It changes the mode from 'light' to 'dark' and vice versa.
   * It also changes the title of the page.
   */
  const toggleStyle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlerts("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlerts("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlerts={showAlerts} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
