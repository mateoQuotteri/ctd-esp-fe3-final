import React from 'react';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Define cada ruta con su path y el componente a renderizar */}
        <Route path="/" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;