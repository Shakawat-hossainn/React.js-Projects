import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App(props) {
  const [mode, setMode] = useState("light");
  const [redmode, setRedmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = (cls) => {
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      
      document.body.style.backgroundColor = "#13091bb3";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#13091bb3";
      showAlert("Light Mode has been enabled", "Success");
    }
  };
  const redtoggleMode = () => {
    if (redmode === "light") {
      setRedmode("Red Dark");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      showAlert("Red Dark Mode has been enabled", "Success");
      
    } else {
      setRedmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#13091bb3";
      showAlert("Light Mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          redmode={redmode}
          redtoggleMode={redtoggleMode}
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route
           exact path="/about"
            element={<About showAlert={showAlert} heading="About" mode={mode}/>}
          />
          
          <Route
           exact path="/home"
            element={
            <TextForm showAlert={showAlert} heading="Text Form" />}
          />
          
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
