import React from "react";
import Experience from "./Experience";
import NavBar from "./NavBar";
import School from "./School";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <School />
      <Experience />
    </div>
  );
};

export default Home;
