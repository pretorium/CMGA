import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  ContactUsContainer, Content, Divider, Text, Button, Input, ContainerInputs, Label, TextArea, Footer
} from './styles';

const ContactUs = () => {
  const [form, setForm] = useState({
    names: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form name="contactUSForm" onSubmit={handleSubmit}>
      <ContactUsContainer container>
        <Divider id="contactanos" />
        <Content container item xs={10} md={5}>
          <Grid item xs={12}>
            <Text styles="title">Contáctanos</Text>
          </Grid>
          <Grid item xs={12}>
            <Text styles="paragraph">
              Si estas interesado y deseas información adicional déjanos tus 
              datos y nos pondremos en contacto inmediatamente contigo.
            </Text>
          </Grid>
          <ContainerInputs item xs={12}>
            <Label>Nombre completo</Label>
            <Input
              name="names"
              type="text"
              value={form.names}
              onChange={handleOnChange}
            />
          </ContainerInputs>
          <ContainerInputs item xs={12}>
            <Label>Correo electrónico</Label>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleOnChange}
            />
          </ContainerInputs>
          <ContainerInputs item xs={12}>
            <Label>Teléfono de contacto *</Label>
            <Input
              required
              name="phone"
              type="number"
              value={form.phone}
              onChange={handleOnChange}
              onWheel={e => { e.preventDefault(); }}
            />
          </ContainerInputs>
          <ContainerInputs item xs={12}>
            <Label>Mensaje</Label>
            <TextArea
              name="message"
              type="text"
              value={form.message}
              onChange={handleOnChange}
            />
          </ContainerInputs>
          <Button
            type="submit"
          >
            ENVIAR MENSAJE
          </Button>
        </Content>
      </ContactUsContainer>
      <Footer>
        COPYRIGHT CMGA 2020
      </Footer>
    </form>
  );
};

export default ContactUs;