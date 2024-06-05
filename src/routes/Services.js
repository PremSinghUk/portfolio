import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';
import WorkCard from '../components/WorkCard';


const Services = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="SERVICES." text="WEB Services Provided By PREM"/>
      <WorkCard />
      <Footer />

    </div>
  )
}

export default Services
