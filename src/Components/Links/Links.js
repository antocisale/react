import React from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import {faCandyCane} from '@fortawesome/free-solid-svg-icons';
import {faCarrot} from '@fortawesome/free-solid-svg-icons';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faJedi} from '@fortawesome/free-solid-svg-icons';
import {faSkull} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import './Links.scss';

const Links = ()=>{
    return(
        <nav className="nav">
            <Link to="/">
                <FontAwesomeIcon icon={faCandyCane}/>
            </Link>
            <Link to="/card1">
                <FontAwesomeIcon icon={faCarrot}/>
            </Link>
            <Link to="/card2">
                <FontAwesomeIcon icon={faCoffee}/>
            </Link>
            <Link to="/movieCard/Leia">
                <FontAwesomeIcon icon={faJedi}/>
            </Link>
            <Link to="/movieCard/Lara-Croft">
                <FontAwesomeIcon icon={faSkull}/>
            </Link>
            <Link to="/movieCard/Wonder-Woman">
                <FontAwesomeIcon icon={faStar} />
            </Link>
        </nav>

    )
}

export default Links;