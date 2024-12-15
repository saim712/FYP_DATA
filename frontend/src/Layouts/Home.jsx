import React from 'react';
import Navbar from '../Components/Navbar';
import Intro from '../Components/Intro';
import Enlightment from '../Components/Enlightment';
import Mission from '../Components/Mission';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Enlightment />
      <Mission />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Home
