// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();  

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/user/login',
        {emailId: email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Login successful', response.data);
        localStorage.setItem('jwtToken',response.data.token);
        history('/');
      } else {
        console.error('Login failed', response.data);
        // Handle login failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error during login', error);
      // Handle other errors
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;