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
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder a senha
  
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
            <div style={{ position: 'relative' }}>
              <FormInput
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              >
                {showPassword ? '👁️' : '🙈'} {/* Um olho para mostrar e um macaco para esconder */}
              </span>
            </div>
            <FormLabel htmlFor='confirmPassword'>Repetir Senha</FormLabel>
            <div style={{ position: 'relative' }}>
              <FormInput
                type={showPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              >
                {showPassword ? '👁️' : '🙈'} {/* Um olho para mostrar e um macaco para esconder */}
              </span>
            </div>
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
