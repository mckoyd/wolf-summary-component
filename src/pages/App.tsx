import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Hi React with Typescript, and you look like you're routing via
              hashes for GitHub Pages! Woah is that MUI v5 already hooked up
              too! Nice!
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
