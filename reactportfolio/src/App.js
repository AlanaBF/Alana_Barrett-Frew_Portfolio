import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PortfolioHome from './Pages/PortfolioHome/PortfolioHome';
import PortfolioContact from './Pages/PortfolioContact/PortfolioContact';
import PortfolioProjectGallery from './Pages/PortfolioProjectGallery/PortfolioProjectGallery';
import CV from './Pages/CV/CV'
import Footer from "./components/Footer/index"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/PortfolioHome" element={<PortfolioHome />} />
          <Route path="/PortfolioContact" element={<PortfolioContact />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/PortfolioProjectGallery" element={<PortfolioProjectGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
