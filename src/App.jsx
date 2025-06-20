
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import TaxCalculatorPage from './pages/TaxCalculatorPage.jsx';
import TaxSlipPage from './pages/TaxSlipPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<TaxCalculatorPage />} />
            <Route path="/tax-slip" element={<TaxSlipPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
