import React from 'react';
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
  return (
    <HeaderContainer>
      <Overlay />
      <ListOptions>
        {sections.map((e) => (
          <Option>
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
