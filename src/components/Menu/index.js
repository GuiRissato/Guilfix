import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className = "Menu">
        <Link to = "/">

            <img src={Logo} alt="Logo" />
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/videos">
            Novo Video
        </Button>


        </nav>
    );
}

export default Menu;