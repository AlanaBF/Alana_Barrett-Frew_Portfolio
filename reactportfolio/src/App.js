import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Contact, ProjectGallery, CV} from "./Pages"
import {Footer, Header} from "./components";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
