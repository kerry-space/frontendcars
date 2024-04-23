import React from "react";
import Header from "./Header";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact"

function Home() {
  return (
    <div>
      <Header
        title="Welcome To Neon Car Studio"
        subtitle="YOUR DRIVE INTO THE FUTURE"
        buttonText="OUR JOURNEY"
        Link="/about"
        showButton={true}
      />

      <Services />
      <Portfolio />
      <Team />
      <Contact/>
    </div>
  );
}

export default Home;
