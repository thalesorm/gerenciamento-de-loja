import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <p>Login</p>
      <input type="Login" placeholder="Email" />
      <input type="password" pattern="senha" />
      <button>entrar</button>
      <button>registrar</button>
    </div>
  );
};

export default Login;
