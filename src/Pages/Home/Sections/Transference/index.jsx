import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '../../Components/button.jsx';
import { 
  TransferenceContainer, ContentLeft, Divider,
  ContentRight, Text, ContainerPartners,
} from './styles';

const Transference = () => {
  return (
    <>
      <TransferenceContainer container>
        <Divider id="transferencia"/>
        <ContentLeft container item xs={12} md={6}>
          <Grid item xs={11} md={9}>
            <Text styles="title">TRANSFERENCIA</Text>
            <Grid>
              <Button 
                styles="white"
                // loading
              >
                DESCARGAR<br/>ESTATUTO
              </Button>
              <Button 
                styles="gold"
                // loading
              >
                EQUIPO<br/>REPRESENTATIVO
              </Button>
            </Grid>
          </Grid>
        </ContentLeft>
        <ContentRight container item xs={12} md={6}>
          <Grid item xs={10} md={9}>
            <Text styles="paragraph">
              El pilar fundamental de nuestra asociación es colocar al Club  Universitario de 
              Deportes en el sitial que siempre debe estar, una institución líder en sudamérica
              en el aspecto deportivo y  como modelo de organización, donde sus socios privilegian 
              el bien común, por encima de cualquier interés personal.
            </Text>
            <Text styles="paragraph">
              Toda nuestra información es pública y se encuentra a disposición de nuestros asociados, 
              motivados por la integridad, la honestidad, la solidaridad, el respeto, la empatía y el compromiso 
              de sus asociados para trabajar desinteresadamente por nuestro club y cuya única motivación  es el amor 
              a nuestra camiseta y a su historia.
            </Text>
          </Grid>
        </ContentRight>
      </TransferenceContainer>
      <ContainerPartners>
        ASOCIADOS ACTIVOS
      </ContainerPartners>
    </>
  );
};

export default Transference;