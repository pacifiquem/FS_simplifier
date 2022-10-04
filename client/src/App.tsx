import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
