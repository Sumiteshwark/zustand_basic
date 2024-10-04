import React from "react";
import Home from "./components/home.jsx";
import Profile from "./components/profile.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;