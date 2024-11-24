import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Shop />
    </>
  );
}

export default App;
