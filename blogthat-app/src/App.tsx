import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { MenuComponent, menuRoutes } from './components/menu'
import { Homepage } from './pages/homepage'

export const App = () => {
  return (
    <div>
    <MenuComponent/>
    <HashRouter>
      <Routes>
        <Route key="default" path="*" element={<Homepage/>} />
        {/* {menuRoutes.map((entry) => {
                return (
                  <Route {...entry} />
                )
              })} */}
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;