import React from 'react';

function ButtonLink(props){
    // props => {
    //     className: ""
    //     href: "/" 
    // };
    console.log(props)
    return (
        <a href={props.href} className = {props.className}>
            {props.children} 
            {/* vai pegar o texto que estiver dentro do buttonLink, automatizando o botao e so passando os parametros */}
        </a>
    );
}

export default ButtonLink;