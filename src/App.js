import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Overview from "./components/Overview";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";
import DownloadRulebook from "./components/Rulebook";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import './styles/styles.css';
import './styles/fonts.css';

function MainPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <section id="overview">
          <Overview />
        </section>
        <section id="rulebook">
          <DownloadRulebook />
        </section>
        <section id="signUp">
          <SignUp />
        </section>
        <Analytics />
        <SpeedInsights />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
    </Router>
  );
}

export default App;
