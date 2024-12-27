import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Pageone from './component/Pageone';
import Pagetwo from './component/Pagetwo';
import Pagethree from './component/Pagethree';
import Pagefour from './component/Pagefour';
import Pagefive from './component/Pagefive';
import Pagesix from './component/Pagesix';
import Login from './component/Login.jsx'; // Import Login component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pageone />} /> {/* Default route is Pageone */}
        <Route path="/Track" element={<Pagetwo />} />
        <Route path="/schedule" element={<Pagethree />} />
        <Route path="/speakers" element={<Pagefive />} />
        <Route path="/contact" element={<Pagesix />} />
        <Route path="/login" element={<Login />} /> {/* Login page route */}
      </Routes>
    </Router>
  );
};

export default App;
