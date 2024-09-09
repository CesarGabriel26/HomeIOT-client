// src/utils/ApiHandler.js
import { jwtDecode } from 'jwt-decode';
import User from '../../models/User';


const API_BASE_URL = 'http://127.0.0.1:5000'; // Altere para o endereço da sua API

// Função para fazer login
export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                'useremail': email, 
                'password' : password
            })
        });
        
        if (!response.ok) {
            return response.message
        }

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

// Função para registrar um novo usuário
export const register = async (userData) => {
    try {
        const user = new User(userData);
        user.validate(); // Valida os dados do usuário

        const response = await fetch(`${API_BASE_URL}/users/add_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user.toJSON()) // Converte o usuário para JSON
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }
        
        
        var data = await response.json()
        return data
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

// Função para fazer logout
export const logout = () => {
    localStorage.removeItem('token');
};

// Função para obter o token armazenado
export const getToken = () => {
    return localStorage.getItem('token');
};

// Função para obter as informações do usuário
export const getUserInfo = () => {
    const token = getToken();
    if (!token) {
        return null;
    }

    try {
        const decoded = jwtDecode(token);
        return decoded;
    } catch (error) {
        console.error('Token decoding error:', error);
        return null;
    }
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
    const token = getToken();
    if (!token) {
        return false;
    }

    try {
        const decoded = jwtDecode(token);
        // Verifica se o token não expirou
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime;
    } catch (error) {
        console.error('Token verification error:', error);
        return false;
    }
};
