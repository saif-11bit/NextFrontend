import React, { useState } from "react";
import axiosInstance from "../utils/axiosApi";
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  
  const loginUser = async (e) => {
    e.preventDefault();
    
    axiosInstance.post(`/auth/login/`, {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem('access_token', res.data.token.access);
      localStorage.setItem('refresh_token', res.data.token.refresh);
      axiosInstance.defaults.headers['Authorization'] = 'Bearer '+localStorage.getItem('access_token');
      console.log(res.data.token);
      router.push('/')
    })
    .catch(error => console.log(error));
  };

  return (
    <form onSubmit={loginUser}>
      <input
        id="email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
