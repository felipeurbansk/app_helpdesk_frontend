import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Dashboard({children}) {

    // const name = localStorage.getItem('user_name');
    // const email = localStorage.getItem('user_email');

    return(
        <div className="full-page">
            <Header/>
            <div className="container-dashboard">
                <section className="menu-sidebar">
                    <div className="menu-body">
                        <h2>Menu</h2>
                        <ul>
                            <li><Link className="link" to="/dashboard" >Dashboard</Link></li>
                            <li><Link className="link" to="/newticket" >Novo ticket</Link></li>
                        </ul>
                    </div>
                </section>
                <section className="content-dashboard">
                    {children}
                </section>
            </div>
            {/* <Footer/> */}
        </div>
    );
}
