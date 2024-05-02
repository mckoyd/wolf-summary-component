import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
