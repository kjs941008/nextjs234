"use client"
import { useState } from 'react';
import axios from 'axios';


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message)
        
      } else {
        console.error('User creation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }finally{

    }


  }

  const aa = (e) => {
    const response = axios({
      url : "api/tokentest",
      method : "GET",
      withCredentials : true,
    })
    if (response.ok) {
      const data = response.json();
      console.log(data.authority);
      console.log(data.email);
      console.log(data.name);

    } else {
      console.error('User creation failed');
    }
    console.log()
  }
  
    return (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleFormSubmit}>
            <label>
              email:
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
          <button onClick={aa}>로그인 테스트</button>
        </div>
      );
}