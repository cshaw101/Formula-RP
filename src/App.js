import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import DownloadRulebook from "./components/Rulebook";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import './styles/styles.css';
import './styles/fonts.css';
import Champions from "./components/Champions";
import Leaderboard from "./components/Leaderboard";
import RaceSchedule from "./components/Schedule";
import StaffPage from "./components/Staff";

function MainPage() {
  return (
    <>
      <HeroSection />
      <main>
        <section id="overview">
          <Overview />
        </section>
        <section id="schedule">
          <RaceSchedule />
        </section>
        {/* <section id="staff">
          <StaffPage />
        </section> */}
        <section id="rulebook">
          <DownloadRulebook />
        </section>
        <Analytics />
        <SpeedInsights />
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
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
