import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // #042743 303134
      showAlert("Dark Mode Activated", "success");
    } else if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated", "success");
    }

  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} togglMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter the text to analyze"
                  mode={Mode}
                  togglMode={toggleMode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
          <Route
            path="/about"
            element={

              <div className="container my-3">
                <About mode={Mode} togglMode={toggleMode} />
              </div>

            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
