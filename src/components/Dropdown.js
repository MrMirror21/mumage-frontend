import React from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
    return (
        <div className="dropdown">
            <button><FontAwesomeIcon icon={faBars}/></button>
            <div className="dropdownMenu">
                <Link to='/ContactUs'>개발자에게 문의하기</Link>
            </div>
        </div>
    );
};

export default Dropdown;