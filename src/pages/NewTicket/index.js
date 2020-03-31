import React, { useState } from 'react';

import './style.css'
import Base from '../Base'

export default function NewTicket() {

    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    function hundleSubmit(e){
        e.preventDefault();
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