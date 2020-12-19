import React from 'react';
import './styles.js';
import Header from '../../Components/Header';
import { HomeContainer } from './styles';
import Banner from './Sections/Banner';
import AboutUs from './Sections/AboutUs';
import OurObjectives from './Sections/OurObjectives';
import Transference from './Sections/Transference';
import TakePart from './Sections/TakePart';
import ContactUs from './Sections/ContactUs';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <AboutUs />
      <OurObjectives />
      <Transference />
      <TakePart />
      <ContactUs />
    </HomeContainer>
  );
}

export default Home;
