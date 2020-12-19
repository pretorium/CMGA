import React from 'react';
import { Grid } from '@material-ui/core';
import { OurObjectivesContainer, Divider, ContentLeft, ContentRight, Text, Points } from './styles';

const OurObjectives = () => {
  return (
    <OurObjectivesContainer container>
      <Divider id="objetivos" />
      <ContentLeft container item xs={12} md={6}>
        <Grid item xs={10} md={9}>
          <Text styles="paragraph">
            Participar activamente en la junta de acreedores con la finalidad de aportar
            en el diseño de un plan a largo plazo, que nos permita afrontar con éxito el pago
            de la deuda concursal y que posibilite la devolución del club a sus hinchas, teniendo
            como horizonte el aniversario por su centenario.
          </Text>
          <Text styles="paragraph">
            Una vez cancelada la deuda concursal, modernizar al club a partir de la gestión empresarial
            en todas sus líneas y su manejo transparente, promoviendo la inscripción de nuevos socios que
            permitan generar flujos futuros para poder financiar el desarrollo de nuestros equipos de fútbol
            y que tengan como máxima expresión, alcanzar la tan soñada Copa Libertadores.
          </Text>
        </Grid>
      </ContentLeft>
      <ContentRight container item xs={12} md={6}>
          <Grid container item xs={10} md={9} justify="flex-end" alignContent="flex-start">
            <Grid>
              <Text styles="titleTop">NUESTROS</Text>
              <Text styles="titleBottom">OBJETIVOS</Text>
            </Grid>
            <Grid container item xs={11} justify="flex-end">
              <Points />
            </Grid>
          </Grid>
      </ContentRight>
    </OurObjectivesContainer>
  );
}

export default OurObjectives;
