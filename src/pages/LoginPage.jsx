import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import authService from '../service/authService';
import './LoginPage.css';

function LoginPage() {

    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // クエリパラメータとしてuseridとpasswordをURLに含める
        const params = new URLSearchParams({ userid, password });

        fetch(`http://localhost:8080/login?${params.toString()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Response status:', response.status);
                return response.text().then(text => {
                    console.log('Response text:', text);
                    if (response.ok) {
                        return text;
                    } else {
                        throw new Error(text);
                    }
                });
            })
            .then(message => {
                if (message === 'Login successful') {
                    navigate('/dashboard');
                } else {
                    alert('Login failed: ' + message);
                }
            })
            .catch(error => {
                alert('Login failed: ' + error.message);
                console.error('Login failed', error);
            });
    };




    return (
        <div className="LoginPage">
            <h1>ログイン</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="userid">ユーザーID</label>
                    <input
                        type="text"
                        id="userid"
                        name="userid"
                        placeholder="root"
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">パスワード</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Abcd1234"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">ログイン</button>
            </form>
            <div className="form-link">
                <button className="text-button" onClick={() => navigate('/')}>
                    アカウントをお持ちでない方は<span>こちら</span>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
