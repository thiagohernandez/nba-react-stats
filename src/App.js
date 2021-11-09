import React from 'react';
import './App.css';
import './css/Global.css';
import './css/Normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Home';
import Team from './Team';
import Page404 from './Page404';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/team/:id" element={<Team />} /> 
          <Route path="*" element={<Page404 />} />  
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
