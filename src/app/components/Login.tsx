// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/Login.scss';

interface LoginProps {
  onLogin: (userData: { name: string; email: string; group: string[] }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For now, we'll just use dummy data
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      group: ['Admin', 'User']
    };
    onLogin(userData);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;