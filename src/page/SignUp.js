// CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();  

  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/register', {
        fullName,
        emailId:email,
        password,
      });

      if (response.status === 201) {
        console.log('User created successfully', response.data);
        localStorage.setItem('jwtToken',response.data.token);
        history('/');
      } else {
        console.error('User creation failed', response.data);
        // Handle user creation failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error during user creation', error);
      // Handle other errors
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <br />
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
        <button type="button" onClick={handleCreateUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default SignUp;
