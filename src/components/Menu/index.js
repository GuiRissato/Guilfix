import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';
function Menu(){
    return (
        <nav className = "Menu">
        <a href = "/">

            <img src={Logo} alt="Logo" />
        </a>
        <Button as='a' className="ButtonLink" href="/">
            Novo Video
        </Button>


        </nav>
    );
}

export default Menu;