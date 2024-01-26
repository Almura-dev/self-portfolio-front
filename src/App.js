import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home2 } from "./Components/Home/Home2";
// import { Topbar } from "./Components/Topbar/Topbar";

function App() {
  return (
    <Router>
      <div className="App w-full h-full  ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home2 />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
