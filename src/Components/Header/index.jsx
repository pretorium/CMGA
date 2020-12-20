import React, { useEffect, useState } from 'react';
import { HeaderContainer, ListOptions, Option, Overlay } from './styles';
import ButtonCollapse from './Components/ButtonColapse';

const sections = [
  {
    label: '¿QUIÉNES SOMOS?',
    link: '#quienes-somos'
  },
  {
    label: 'OBJETIVOS',
    link: '#objetivos'
  },
  {
    label: 'TRANSPARENCIA',
    link: '#transparencia'
  },
  {
    label: 'CÓMO PARTICIPAR',
    link: '#como-participar'
  },
  {
    label: 'CONTÁCTANOS',
    link: '#contactanos'
  },
];

const Header = () => {
  const [sectionsPosition, setSectionsPosition] = useState({})
  const [windowTopPosition, setWindowTopPosition] = useState(0);
  const [resize, setResize] = useState(0);

  const getSectionsPosition = () => {
    const arrayPositions = {};
    sections.forEach(e => {
      arrayPositions[e.link.substring(1)] = {
        distanceToTop: Math.floor(document.getElementById(e.link.substring(1)).offsetParent.offsetTop +
          document.getElementById(e.link.substring(1)).offsetTop),
        lowerLimit: Math.floor(document.getElementById(e.link.substring(1)).offsetParent.offsetTop + 
          document.getElementById(e.link.substring(1)).offsetParent.offsetHeight)
      }
    });
    setSectionsPosition(arrayPositions);
  };

  const onScroll = () => {
    setWindowTopPosition(window.pageYOffset + (window.pageYOffset * 0.05));
  };

  useEffect(() => {
    getSectionsPosition();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => setResize(window.innerWidth));
    return function cleanupListener() {
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('resize', () => setResize(window.innerWidth));
    };
  }, [resize]);

  const handleActivate = (idSection) => {
    if (sectionsPosition[idSection]) {
      return (
        windowTopPosition >= sectionsPosition[idSection].distanceToTop
        && windowTopPosition <= sectionsPosition[idSection].lowerLimit
      );
    }
  }

  return (
    <HeaderContainer>
      <Overlay active={
        sectionsPosition['quienes-somos'] 
        && windowTopPosition >= sectionsPosition['quienes-somos'].distanceToTop
      } />
      <ListOptions>
        {sections.map((e, i) => (
          <Option key={i} active={handleActivate(e.link.substring(1))}>
            <a href={e.link}>
              {e.label}
            </a>
          </Option>
        ))}
      </ListOptions>
      <ButtonCollapse sections={sections} handleActivate={handleActivate}/>
    </HeaderContainer>
  );
};

export default Header;
