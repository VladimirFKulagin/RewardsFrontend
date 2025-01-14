import { Link } from "react-router-dom"

import React from 'react';
import keycloak from "../Keycloak";




export function Navbar({authenticated, onLogin}){
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow"  >
            <div className="container" style={{backgroundColor: '#73AB84'}}>
                <Link className="navbar-brand" to="/">
                    <img src="/basket.png" alt="..." width="30" className="me-2"/>
                    Habit tracker
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                    {authenticated && (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/admin/rewards">Rewards</Link>
                                </li>
                                <li className="nav-item">
                                    <label className="nav-link text-dark">Port: {process.env.REACT_APP_API_URL}</label>
                                </li>
                            </ul>
                            
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <button onClick={() => { keycloak.logout({ redirectUri: 'http://localhost:3000/' }) }} className="dropdown-item text-dark" severity="danger">{keycloak.tokenParsed.preferred_username} : Выйти</button>
                                    
                                </li>
                            </ul>
                        </div>
                    )}
                    {!authenticated && (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                </li>
                            </ul>
                            
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <button onClick={() => { keycloak.login() }} className="dropdown-item text-dark float-right" severity="success">Войти</button>
                                </li>
                            </ul>
                        </div>
                    )}
                    
                    
            </div>
        </nav>
    )
}


export function Footer() {
    return (
        <div className="text-center p-4 border-top">
            <img src="/basket.png" alt="..." width="30" className="me-2"/>
            Habit tracker
        </div>
    )
}