import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCandyCane} from '@fortawesome/free-solid-svg-icons';
import {faCarrot} from '@fortawesome/free-solid-svg-icons';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
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
        </nav>

    )
}

export default Links;