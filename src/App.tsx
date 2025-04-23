import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fights from './pages/Fights';
import FightDetail from './pages/FightDetail';
import FighterProfile from './pages/FighterProfile';
import EventDetails from './pages/EventDetails';
import Artists from './pages/Artists';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fights" element={<Fights />} />
        <Route path="/fight/:id" element={<FightDetail />} />
        <Route path="/fighter/:id" element={<FighterProfile />} />
        <Route path="/event" element={<EventDetails />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </Router>
  );
}

export default App;