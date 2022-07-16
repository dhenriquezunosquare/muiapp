import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { JobsPages } from "./pages/JobsPages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="home" element={<Home />}>
          <Route path="jobs" element={<JobsPages />} />
      </Route>
      <Route path="*" element={<Login />}   />

    </Routes>
  );
}

export default App;
