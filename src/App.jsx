import React from "react";
import "./index.css";
import "./css/style.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
