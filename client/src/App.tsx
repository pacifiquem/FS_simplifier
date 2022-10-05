import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import UrlCounterPage from './pages/urlCounter';
import NoPage from './pages/noPage';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='urlcounter' element={<UrlCounterPage />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
