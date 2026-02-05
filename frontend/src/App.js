import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectDetailsV2 from "./pages/ProjectDetailsV2"; // Cloned version
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Toggle between designs here */}
          <Route path="/project/:slug" element={<ProjectDetailsV2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

