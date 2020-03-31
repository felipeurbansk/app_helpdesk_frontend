import React from 'react';

import './style.css';

export default function Header(props) {
    
    const name = localStorage.getItem('user_name');

    return (
        <div className="container-header">
            <div className="logo">
                <h1>HelpDesk</h1>
            </div>
            <div className="header-menu">
                <ul>
                    <li>{ name }</li>
                </ul>
            </div>
        </div>
    );
}
