import React, { useState } from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, BackButton, ForgetButton } from './LoginElements';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagem de erro
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      navigate('/');
    } else {
      setErrorMessage('Email ou senha incorretos'); // Define a mensagem de erro
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">SkateFlow</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormH1>LOGIN ADMIN</FormH1>
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
                {showPassword ? '👁️' : '🙈'}
              </span>
            </div>
            {errorMessage && <p className="error-text">{errorMessage}</p>} {/* Mensagem de erro */}
            <FormButton type='submit'>Entrar</FormButton>
            <Text>
              <ForgetButton to="/forget">Esqueci a senha</ForgetButton>
            </Text>
            <BackButton to="/signin">Voltar</BackButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
