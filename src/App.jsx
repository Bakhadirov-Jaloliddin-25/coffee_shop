import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
// import Product from "./components/menu/Product";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Menu />
        {/* <Product /> */}
      </div>
    </>
  );
}

export default App;
