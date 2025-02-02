import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import CreateNotebook from "./pages/editPage/editPage"; // Create a new component for the new page.

function App() {
  return (
    <Router>
      <div className="main">

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-notebook" element={<CreateNotebook />} />{" "}
          {/* New route for the create notebook page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
