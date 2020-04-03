import React, {useState, useEffect} from 'react';
import { Table, Button, Dropdown } from 'react-bootstrap'

import api from '../../services/api';

import './style.css'
import Base from '../Base'

export default function NewTicket() {

    const [tickets, setTickets] = useState([]);

    useEffect( () => {
        api.get('ticket', {
            headers: {
                user_id: localStorage.getItem('user_id'),
                authorization: localStorage.getItem('user_token')
            }
        }).then(response => {
            setTickets(response.data)
        })
    })

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
                                                <Dropdown.Item href="#/action-1">Responder</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Excluir</Dropdown.Item>
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