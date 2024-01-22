import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home2 } from "./Components/Home/Home2";
// import { Topbar } from "./Components/Topbar/Topbar";

function App() {
  return (
    <Router>
      <div className="App container w-full h-full ">
        {/* <Topbar/> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
