import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PortfolioHome from './Pages/PortfolioHome/PortfolioHome';
import PortfolioContact from './Pages/PortfolioContact/PortfolioContact';
import PortfolioProjectGallery from './Pages/PortfolioProjectGallery/PortfolioProjectGallery';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/PortfolioHome" element={<PortfolioHome />} />
          <Route path="/PortfolioContact" element={<PortfolioContact />} />
          <Route path="/PortfolioOrojectGallery" element={<PortfolioProjectGallery />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
