import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  LoginButton,
} from './SigninElements';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
    } else {
      setErrorMessage('');
      // Salva o email e a senha no localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      // Redireciona para a página de sucesso
      navigate('/success');
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">SkateFlow</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1> CADASTRO DE ADMIN </FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <FormInput
              type='password'  // Removido o toggle de mostrar/esconder senha
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <FormLabel htmlFor='confirmPassword'>Repetir Senha</FormLabel>
            <FormInput
              type='password'  // Removido o toggle de mostrar/esconder senha
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            {errorMessage && <p className="error-text">{errorMessage}</p>}
            <FormButton type='submit'>Continue</FormButton>
            <LoginButton to="/login">Fazer Login</LoginButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
