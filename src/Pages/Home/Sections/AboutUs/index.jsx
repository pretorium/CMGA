import React from 'react';
import { Grid } from '@material-ui/core';
import { 
  AboutUsContainer, ContentLeft, Divider,
  ContentRight, Text, BannerStadium, Span,
} from './styles';

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer container>
        <Divider id={"quienes-somos"}/>
        <ContentLeft container item xs={12} md={6}>
          <Grid item xs={11} md={9}>
            <Text styles="titleTop">¿QUIÉNES</Text>
            <Text styles="titleBottom">SOMOS?</Text>
          </Grid>
        </ContentLeft>
        <ContentRight container item xs={12} md={6}>
          <Grid item xs={10} md={9}>
            <Text styles="paragraph">
              Somos un grupo de profesionales y emprendedores que amamos al Club Universitario de
              Deportes y hemos constituido la Asociación Crema mi Gran Amigo para canalizar nuestro
              apoyo a la institución, con la tranquilidad de no haber participado en la gestión del
              club, ya sea al interior de sus juntas directivas o de las administraciones concursales
              que han derivado en la crisis actual.
          </Text>
            <Text styles="paragraph">
              La Copa Libertadores es nuestra obsesión y para eso debemos trabajar en un plan que nos
              permita cancelar la deuda concursal y proponer los flujos futuros para el desarrollo institucional.
          </Text>
          </Grid>
        </ContentRight>
      </AboutUsContainer>
      <BannerStadium container>
        <Grid item xs={10} md={6}>
          <Text styles='stadiumText'>
            <Span styles='spanStadium'>ESTE SENTIMIENTO</Span><br/>
            NUNCA SE APAGA
          </Text>
        </Grid>
      </BannerStadium>
    </>
  );
};

export default AboutUs;