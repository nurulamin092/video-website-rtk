import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Videos from './pages/Video';


import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';

function App() {
  return (
  // <Router>
  //   <Navbar/>
  //   <Routes>
  //    <Route path='/' element={<Home/>}/>
  //    <Route path='/videos/:videoId' element={<Videos/>}/>
  //   </Routes>
  //   <Footer/>
  // </Router>

  <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/:videoId" element={<Videos />} />
            </Routes>
            <Footer />
        </Router>

  );
}

export default App;
