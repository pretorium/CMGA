import './styles.js';
import Header from '../../Components/Header';
import { HomeContainer } from './styles';
import Banner from './Sections/Banner';
import AboutUs from './Sections/AboutUs';

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <AboutUs />
    </HomeContainer>
  );
}

export default Home;
