import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../service/authService';
import './RegisterPage.css';

function RegisterPage() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const addStock = (formData) => {
        fetch('http://localhost:8080/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    console.log('新規登録が完了しました！');
                    navigate('/login');  // 新規登録が成功したらログインページに遷移する
                } else {
                    console.error('Failed to add stock');
                }
            })
            .catch(error => {
                console.error('Error adding stock:', error);
            });
    }

    const handleRegister = async (e) => {
        console.log(e);
        e.preventDefault();
        const formData = new FormData(e.target);
        const newStock = {
            userid: formData.get('userid'),
            password: formData.get('password')
        };
        addStock(newStock);
    };


    return (
        <div className="RegisterPage">
            <h1>新規登録</h1>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="userid">ユーザーID</label>
                    <input
                        type="text"
                        id="userid"
                        name="userid"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="root"
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
                <button type="submit" className="register-button">登録</button>
            </form>
            <div className="form-link">
                <button className="text-button" onClick={() => navigate('/login')}>
                    すでにアカウントをお持ちの方は<span>こちら</span>
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;