/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Button from '../../Components/button.jsx';
import {
  TransferenceContainer, ContentLeft, Divider, Column,
  ContentRight, Text, ContainerPartners, Partner, Wrapper,
} from './styles';

const Transparencia = () => {
  const [patnerts, setPatnerts] = useState({});

  const handleData = async () => {
    let array;
    await fetch(`${process.env.PUBLIC_URL}/fake/patnertsImages.json`)
      .then((r) => r.json())
      .then((data) => {
        array = data;
      });
    
    let col = 0;
    const objectDataImages = {};
    const imagesDividen = array.map((e, i) => {
      if ((i) % 3 == 0) col += 1;
      return ({
        col,
        img: e.img,
      })
    });
    imagesDividen.forEach((obj) => {
      objectDataImages[obj.col] = imagesDividen
        .filter((e) => e.col == obj.col)
        .map((e) => e.img);
    });
    
    setPatnerts(objectDataImages);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <TransferenceContainer container>
        <Divider id="transparencia" />
        <ContentLeft container item xs={12} md={6}>
          <Grid item xs={11} md={9}>
            <Text styles="title">TRANSPARENCIA</Text>
            <Grid>
              <Button
                styles="white"
              // loading
              >
                DESCARGAR<br />ESTATUTO
              </Button>
              <Button
                styles="gold"
              // loading
              >
                EQUIPO<br />REPRESENTATIVO
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
        <Wrapper>
          {Object.keys(patnerts).map((col) => (
            <Column>
              {patnerts[col].map((row, idx) => (
                <Partner key={idx} img={row} />
              ))}
            </Column>
          ))}
        </Wrapper>
        <Text styles="textSlider">ASOCIADOS ACTIVOS</Text>
      </ContainerPartners>
    </>
  );
};

export default Transparencia;