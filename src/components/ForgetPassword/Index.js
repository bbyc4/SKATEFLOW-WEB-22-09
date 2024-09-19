import React, { useState } from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, BackButton } from './ForgetPassElements';

const ForgetPass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');

    if (email === storedEmail) {
      alert('Solicitação de recuperação de senha enviada para ' + email);
      // Aqui você pode adicionar mais lógica, como enviar um email real
    } else {
      alert('Email não encontrado. Verifique se está cadastrado.');
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">SkateFlow</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormH1>Recuperar Senha</FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput 
              type='email' 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              autoComplete="off" 
            />
            <FormButton type='submit'>Enviar</FormButton>
            <BackButton to="/login">Retornar ao Login</BackButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default ForgetPass;
