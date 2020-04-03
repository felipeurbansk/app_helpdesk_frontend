import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';

import './style.css';

export default function Register() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function hundleSubmit(e){

        e.preventDefault();

        if ( !name ) console.log('Nome não informado')
        if ( !email ) console.log('E-mail não informado')
        if ( !password ) console.log('Senha não informado')

        try {

            const response = await api.post('/user', {
                name,
                email,
                password
            });

            localStorage.setItem('user_id', response.data.id);
            localStorage.setItem('user_name', name);
            localStorage.setItem('user_email', email);
            localStorage.setItem('user_token', response.data.token);

            history.push('/dashboard');

        } catch(err) {
            console.log({"erro": err.response.data.error})
        }

    }

    return (
        <div className="container container-register">
            <h2>Registre-se</h2>
            <section className="form-register">
                <form onSubmit={hundleSubmit}>

                    <input type="text" 
                        className="input" 
                        placeholder="Nome compelto"
                        onChange={e => { setName(e.target.value)}} />

                    <input type="email" 
                        className="input" 
                        placeholder="E-mail"
                        onChange={e => {setEmail(e.target.value)}} />
                    
                    <input type="password" 
                        className="input" 
                        placeholder="Senha"
                        onChange={e => {setPassword(e.target.value)}} />
                
                    <button type="submit" className="button">Cadastrar</button>

                </form>
            </section>
        </div>
    );
}