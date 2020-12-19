import React, { useEffect, useState } from 'react';
import { HeaderContainer, ListOptions, Option, Overlay } from './styles';

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
    link: '#transferencia'
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
    return function cleanupListener() {
      window.removeEventListener('scroll', onScroll)
    };
  }, []);

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
        {sections.map((e) => (
          <Option active={handleActivate(e.link.substring(1))}>
            <a href={e.link}>
              {e.label}
            </a>
          </Option>
        ))}
      </ListOptions>
    </HeaderContainer>
  );
};

export default Header;
