import React from 'react';

const Login = props => {
  return (
    <div>
      <div>
        <label>Usuário: </label>
        <input type="text" title="apelido ou email do usuário" />
      </div>
      <div>
        <label>Senha: </label>
        <input type="password" title="senha do usuário" />
      </div>
      <div>
        <input type="submit" title="Entrar" />
      </div>
    </div>
  );
};

export default Login;
