import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <About />
      <Work />
      <Companies />
      <Footer />
    </>
  );
}

export default App;
