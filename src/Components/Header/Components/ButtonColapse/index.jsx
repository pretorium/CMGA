/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { HamburgerButton, Line, NavRight, NavElements, Option } from './styles';

const ButtonCollapse = (props) => {
  const {
    sections,
    handleActivate,
  } = props;
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(!open);
  }

  return (
    < >
      <HamburgerButton open={open} onClick={handleButtonClick}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </HamburgerButton>
      <NavRight open={open}>
        <NavElements>
          {sections.map((e, i) => (
            <Option key={i} active={handleActivate(e.link.substring(1))} open={open}>
              <a href={e.link} onClick={handleButtonClick}>
                {e.label}
              </a>
            </Option>
          ))}
        </NavElements>
      </NavRight>
    </ >
  );
}

export default ButtonCollapse;
