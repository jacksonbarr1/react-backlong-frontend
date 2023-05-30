import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import SearchBar from "../searchbar/SearchBar";

const NavBar = () => {



    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo"/>
                    <h1 className="navbar-brandname">Backlogger</h1>
                </div>
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}

export default NavBar