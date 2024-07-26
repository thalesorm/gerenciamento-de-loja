import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <p>Login</p>
      <input type="Login" placeholder="Email" />
      <input type="password" pattern="senha" />
    </div>
  );
};

export default Login;
