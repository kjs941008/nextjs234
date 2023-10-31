"use client"
import { useState } from 'react';

export default function CreateUserForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(true);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('User creation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }finally{
      alert('회원가입 완료');
    }
  }

const dupliecationEmailCheck = async (e) => {
  try {
    e.preventDefault();
    const response = await fetch('/api/CheckDuple', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.isDuplicate);
      if(data.isDuplicate){
        alert("생성 가능");
        setCheck(false);
      }else{
        alert("부커이");
        setCheck(true);
      }
    } else {
      console.error('User creation failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }finally{
      
  }
}
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button disabled={!check} onClick={ dupliecationEmailCheck }> 중복 체크</button>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" disabled={check}>Create User</button>
      </form>
    </div>
  );
}
