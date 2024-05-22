import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

function DashboardPage() {

    const navigate = useNavigate();

    const handleLogout = () => {
        // ログアウト処理をここに追加する
        // 例えば、セッションをクリアするなど
        navigate('/login');
    };

    return (
        <div class="DashboardPage">
            <header>
                <button className="logout-button" onClick={handleLogout}>ログアウト</button>
            </header>
            <main>
                <form class="todo-form">
                    <input type="text" placeholder="タスクを入力してください" />
                    <button type="submit" class="add-button">追加</button>
                </form>
                <ul class="todo-list">
                    <li class="todo-item">
                        <span>洗い物をする</span>
                        <button class="delete-button">x</button>
                    </li>
                    <li class="todo-item">
                        <span>洗濯物を干す</span>
                        <button class="delete-button">x</button>
                    </li>
                    <li class="todo-item">
                        <span>買い物へ行く</span>
                        <button class="delete-button">x</button>
                    </li>
                </ul>
            </main>
        </div>
    );
};

export default DashboardPage;
