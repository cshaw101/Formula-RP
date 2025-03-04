import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";
import DownloadRulebook from "./components/Rulebook";
import HeroSection from "./components/HeroSection";
import './styles/styles.css'
import './styles/fonts.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
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

export default App;
