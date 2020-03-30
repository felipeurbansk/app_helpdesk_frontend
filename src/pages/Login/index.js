import React, { useState } from 'react';

import './style.css';
import logoImg from '../../logo.svg';
import { FiUserPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

export default function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const history = useHistory();

    async function hundleSubmit(e) {
        
        e.preventDefault();
        
        try {

            const response = await api.post('user/login', {email, password});
            

            localStorage.setItem('user_token', response.data.token)
            localStorage.setItem('user_email', response.data.user.email)
            localStorage.setItem('user_name', response.data.user.name)
            localStorage.setItem('user_id', response.data.user.id)

            history.push('/dashboard');

        } catch(err) {

            alert('Login ou senha inválido, tente novamente!')

        }
        
    }

    return(
        <div className="container component-login">
            <div className="container logo">
                <img src={logoImg} alt="Help Desk"/>
            </div>
            <div className="container container-login">
                <form onSubmit={hundleSubmit}>
                    <input
                        type="email"
                        className="hd-input"
                        placeholder="E-mail"
                        value={email}
                        onChange = { e => {setEmail(e.target.value)}}
                    />
                    <input 
                        type="password"
                        className="hd-input"
                        placeholder="Password"
                        value={password}
                        onChange = { e => {setPassword(e.target.value) }}
                    />

                    <div className="container component-link">
                        <button type="submit" className="button">Entrar</button>

                        <Link className="link" to="/register">
                            <FiUserPlus size={18} color="#6bf482"/>
                            Não possuo cadastro
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
    
}