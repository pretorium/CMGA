import React from 'react';
import { Grid } from '@material-ui/core';
import { BannerContainer, BannerLeft, BannerRight, Shield, Text } from './styles';

const Banner = () => {
  return (
    <BannerContainer container>
      <BannerLeft container item xs={6}>
        <Grid container item xs={7}>
          <Shield>
            <Text styles="number">
              2
              <Text styles="bottomNumber">
                ACREENCIAS <br />
                ADQUIRIDAS
              </Text>
            </Text>
          </Shield>
          <Text styles="bottomText">
            ¡SÚMATE, EL CLUB TE NECESITA!
          </Text>
        </Grid>
      </BannerLeft>
      <BannerRight container item xs={6}>
        <Grid item xs={7}>
          Derch
        </Grid>
      </BannerRight>
    </BannerContainer>
  );
};

export default Banner;