import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loginData.email === 'admin@gmail.com' && loginData.password === '12345') {
          // Static validation for admin
            localStorage.setItem('user', JSON.stringify({ email: loginData.email, role: 'admin' }));
            navigate('/admin');
        } else {
            try {
                const response = await axios.post('http://localhost:8080/login', loginData);
                console.log('User logged in:', response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                   navigate('/home');
            }catch (error) {
                console.error('There was an error logging in!', error);
                alert('Login failed');
            }
        }
    };

    return (
        <div className="App">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
            <button><Link to="/all">Click to view all data</Link></button>
        </div>
    );
};

export default Login;
