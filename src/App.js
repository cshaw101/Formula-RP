import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import WeatherSection from "./components/Weather";
import EconomySection from "./components/Economy";
import RoleplayEvents from "./components/RoleplayEvents";
import DownloadRulebook from "./components/Rulebook";
import HeroSection from "./components/HeroSection";
import './styles/styles.css'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <Overview />
        <HowItWorks />
        <WeatherSection />
        <EconomySection />
        <RoleplayEvents />
        <DownloadRulebook />
        <SignUp />
      </main>
      <Footer />
    </>
  );
}

export default App;
