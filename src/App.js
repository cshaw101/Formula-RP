import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Overview />
        <SignUp />
      </main>
      <Footer />
    </>
  );
}

export default App;
