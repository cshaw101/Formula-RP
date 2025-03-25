import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import DownloadRulebook from "./components/Rulebook";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Champions from "./components/Champions";
import Leaderboard from "./components/Leaderboard";
import Season1 from "./components/archive/Season1";
import Season2 from "./components/archive/Season2";
import './styles/styles.css';
import './styles/fonts.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

function MainPage() {
  return (
    <>
      <HeroSection />
      <main>
        <section id="overview">
          <Overview />
        </section>
        <section id="rulebook">
          <DownloadRulebook />
        </section>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/archive/season1" element={<Season1 />} />
        <Route path="/archive/season2" element={<Season2 />} />
      </Routes>
    </Router>
  );
}

export default App;