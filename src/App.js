import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Tes autres imports
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CoursesPage from "./pages/CoursePage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Le contenu des pages changera ici, en dessous de la Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CoursesPage />} /> 
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;