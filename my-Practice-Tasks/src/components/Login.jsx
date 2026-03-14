import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            localStorage.setItem('isLoggedIn', 'true');
            setIsLogin(true);
            navigate('/');
        }
    };
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;