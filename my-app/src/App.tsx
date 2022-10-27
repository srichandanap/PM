import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './views/signIn/signIn';
import { Routes, Route } from "react-router-dom";
import SignUp from './views/signUp/signUp';
import Home from './views/home/home';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
