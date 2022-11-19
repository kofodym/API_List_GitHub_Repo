import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Route";
import GitRepo from "./components/Route/GitRepo";
import ErrorPage from "./components/Route/ErrorPage";
import ErrorComponent from "./components/Route/ErrorComponent";
import Navigation from "./components/NavigationBar";

import "./App.css";

function App() {
  return (
    <div className="app">
<Navigation />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/repos/*" element={<GitRepo />} />
        <Route path="/error-boundary" element={<ErrorComponent />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;
