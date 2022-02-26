import React from "react";
import Carrousel from "../components/Carrousel/Carrousel";
import Conocenos from "../components/Conocenos/Conocenos";
import Navbar from "../components/Navbar/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Carrousel />
      <Conocenos />
    </div>
  );
};

export default Landing;
