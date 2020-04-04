import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';

import api from '../../services/api';

import './style.css';
import Base from '../Base';

export default function NewTicket() {

    const [tickets, setTickets] = useState([]);
    const history = useHistory();

    useEffect( () => {

        if ( !localStorage.getItem('user_token') ) history.push('/')

        api.get('ticket', {
            headers: {
                user_id: localStorage.getItem('user_id'),
                user_token: localStorage.getItem('user_token')
            }
        }).then(response => {
            setTickets(response.data)
        })
    }, [])

    function hundleView( id ) {
        
        // if ( !id ) return false;

        // const ticket = api.post('/ticket', {
        //     headers: {
        //         user_id
        //     }
        // })

    }

    async function hundleDelete( id ) {
        
        if (!id) return false;

        await api.delete('ticket',{
            headers: {
                user_id: localStorage.getItem('user_id'),
                user_token: localStorage.getItem('user_token')
            },
            data: {
                id: id
            }
        }).then( response => {
            setTickets(tickets.filter( ticket =>  ticket.id !== id ))
        }).catch( err => {
            console.log(err)
        });

    }

    return (
        <Base>
            <div className="container container-list-tickets">
                <h2>Tickets abertos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Assunto</th>
                            <th>Opções</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {
                            tickets.map( ticket => (
                                <tr key={ticket.id}>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.subject}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" id={"dropdown-ticket-" + ticket.id} > 
                                                Opções
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => { hundleView(ticket.id) }}>Visualizar</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { hundleDelete(ticket.id) }}>Excluir</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </Table>
            </div>
        </Base>
    );

}