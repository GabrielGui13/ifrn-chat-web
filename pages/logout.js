import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppButton,AppContainer, AppInput } from '../src/components';
import Header from '../src/components/Header';

const Login = props => {
  const router = useRouter();

  const handleLogout = () => {
		localStorage.removeItem('username')
		router.push('/')
	}

  return (
    <div>
      <Head>
        <title>página de login</title>
      </Head>
      <Header />

      <div>
        <h1>Tem certeza que deseja deslogar?</h1>
        <button onClick={handleLogout}>Deslogar</button>
      </div>
    </div>
  );
};

export default Login;
/*
html
  head
  body
*/