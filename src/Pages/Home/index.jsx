import './styles.js';
import Header from '../../Components/Header';
import { HomeContainer } from './styles';
import Banner from './Sections/Banner';
import AboutUs from './Sections/AboutUs';
import OurObjectives from './Sections/OurObjectives';
import Transference from './Sections/Transference';

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <AboutUs />
      <OurObjectives />
      <Transference />
    </HomeContainer>
  );
}

export default Home;
