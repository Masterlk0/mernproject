import React from "react"; // Add React import for JSX compatibility
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css"; // Your CSS file
import Home from "./components/Home/home"; // Import Home component
import Adduser from "./components/Adduser/user"; 
import Userdetails from "./components/Userdetails/users"; 

function App() {
  return (
    <div>
      <Home />
      <React.Fragment>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/Userdetails" element={<Userdetails />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
