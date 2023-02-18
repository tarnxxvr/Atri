import React from "react";
import Nav from "./Navbar";
import Maincard from "./Maincard";
import Menucard from "./Menucard";
import About from "./About";
import Footer from "./Footer";
import "../page-css/main.css";
import Bmenu from "./Bmenu";
import Bigb from "./Bigb";
export default function Main() {
  return (
    <>
      <Nav />
      <Maincard />
      <Menucard />
      <About />
      <Bmenu />
      <Bigb />
      {/* <Footer /> */}
    </>
  );
}
