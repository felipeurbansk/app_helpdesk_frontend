import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import './style.css'
import Base from '../Base'

import api from '../../services/api';

export default function NewTicket() {

    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    async function hundleSubmit(e){
        e.preventDefault();

        await api.post('/ticket', {subject, description}, {
            headers: {
                user_id: localStorage.getItem('user_id'),
                user_token: localStorage.getItem('user_token')
            }
        }).then(response => {
            history.push('/dashboard')
        }).catch(err => {
            alert('Erro: ' + err)
        })
        

    }

    return (
        <Base>
            <div className="container-new-ticket">
                <div className="new-ticket-title">
                    <h2>Novo ticket</h2>
                </div>
                <div className="form-new-ticket">
                    <form onSubmit={hundleSubmit}>
                        <input
                            className="input"
                            type="text"
                            value={subject}
                            onChange= {e => { setSubject(e.target.value) }}
                            placeholder="Assunto"
                        />
                        <textarea
                            className="input"
                            onChange={e => {setDescription(e.target.value)}}
                            value={description}>
                        </textarea>
                    
                        <button className="button" type="submit">Abrir ticket</button>

                    </form>
                </div>
            </div>
        </Base>
    );

}