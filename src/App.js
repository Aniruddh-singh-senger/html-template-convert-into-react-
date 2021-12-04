import React from 'react';
import About from './Component/About';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Main from './Component/Main';
import News from './Component/News';
import Services from './Component/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogDetails from './Component/BlogDetails';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const toggelemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <BrowserRouter>
      
      
        <Header mode={mode} toggelemode={toggelemode} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/News" element={<News />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/BlogDetails" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
