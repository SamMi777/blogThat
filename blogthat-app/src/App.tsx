import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import { MenuComponent, menuRoutes } from "./components/menu";
import { Homepage } from "./pages/homepage";

export const App = () => {
  return (
    <div>
      <MenuComponent />
      <HashRouter>
        <Routes>
          {/* Render all routes from menuRoutes */}
          {menuRoutes.map((entry) => (
            <Route key={entry.key} path={entry.path} element={entry.element} />
          ))}
          {/* Default homepage route (matches only if no other route matches) */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
