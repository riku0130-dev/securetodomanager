import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CreateTodoPage from './pages/CreateTodoPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-todo" element={<CreateTodoPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;