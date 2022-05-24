import React from 'react';
import Head from 'next/head'
import { AppButton,AppContainer, AppInput } from '../src/components';

const Login = props => {
  return (
    <div>
      <Head>
        <title>página de login</title>
      </Head>
      <main>
      <AppContainer>
        <AppInput label="Usuário" title="apelido ou email do usuário"/>
        <AppInput label="Senha" type="password" />
        <AppButton />
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