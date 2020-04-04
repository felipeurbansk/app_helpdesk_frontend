import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function Header(props) {
    
    const name = localStorage.getItem('user_name');
    
    function hundleLogout(e) {
        localStorage.clear();
    }

    return (
        <div className="container-header">
            <div className="logo">
                <h1>HelpDesk</h1>
            </div>
            <div className="header-menu">
                <ul>
                    <li>{ name }</li>
                    <li><Link class="link" onClick={hundleLogout} to="/">Sair</Link></li>
                </ul>
            </div>
        </div>
    );
}
