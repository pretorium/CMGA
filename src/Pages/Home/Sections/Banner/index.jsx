import React from 'react';
import { Grid } from '@material-ui/core';
import ProgressBar from '../../Components/progressBar';
import { BannerContainer, BannerLeft, BannerRight, Shield, Text, Span, Logo, LogoContainer } from './styles';

const Banner = () => {
  return (
    <BannerContainer container>
      <BannerLeft container item xs={12} md={6}>
        <Grid container item xs={11} md={7}>
          <Shield>
            <Text styles="number">
              2
              <Text styles="bottomNumber">
                ACREENCIAS <br />
                ADQUIRIDAS
              </Text>
            </Text>
          </Shield>
          <Grid item xs={12}>
            <Text styles="bottomText">
              ¡SÚMATE, EL CLUB TE NECESITA!
            </Text>
          </Grid>
          <ProgressBar />
        </Grid>
      </BannerLeft>
      <BannerRight container item xs={12} md={6}>
        <Grid container item xs={11} md={7}>
          <Grid item xs={12}>
            <Text styles="rightText">
              <Span styles="1">LA</Span> <Span styles="2">“U”</Span> <br />
              <Span styles="3">ES GRANDE</Span> <br />
              <Span styles="4">PORQUE</Span> <br />
              <Span styles="5">SUS HINCHAS</Span> <br />
              <Span styles="6">SON GRANDES</Span> <br />
            </Text>
          </Grid>
          <LogoContainer container item xs={12}>
            <Logo />
            <Grid>
              <Text styles="textLogo">
                <Span styles="textLogo-top">ASOCIACIÓN</Span> <br />
                <Span styles="textLogo-mid">CREMA</Span> <br />
                <Span styles="textLogo-bottom">MI GRAN AMIGO</Span> <br />
              </Text>
            </Grid>
          </LogoContainer>
        </Grid>
      </BannerRight>
    </BannerContainer>
  );
};

export default Banner;