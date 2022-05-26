import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppButton,AppContainer, AppInput } from '../src/components';
import Header from '../src/components/Header';

const Login = props => {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username)
    setUsername('')
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>página de login</title>
      </Head>
      <Header />
      <main>
        <AppContainer style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
          <AppInput 
            label="Usuário" 
            title="apelido ou email do usuário" 
            style={{ margin: '10px' }} 
            placeholder="Nick github" 
            onChange={event => setUsername(event.target.value)}
            value={username}
          />
          <small>Insira seu nick do github para melhor experiência</small>
          <AppInput label="Senha" type="password" style={{ margin: '10px' }} />
          <AppButton type="submit" title="Clique aqui para entrar no chat" label="Entrar no chat" required={required} />
        </form>
        </AppContainer>
      </main>
      </div>
  );
};

export default Login;
/*
html
  head
  body
*/