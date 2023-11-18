import React from 'react';
import '../styles/Dropdown.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({name}) => {
    return (
        <div className="menu">
            <button id="menu-icon"><FontAwesomeIcon icon={faBars} style={{ backgroundColor: 'white', fontSize: '20px' }}/></button>
            <div id="name">{name}</div>
            <div className="dropdownMenu">
                <Link className="menu-a" to='/Explore'>Explore</Link>
                <Link className="menu-a" to='/ContactUs'>ContactUs</Link>
            </div>
        </div>
    );
};

export default Dropdown;