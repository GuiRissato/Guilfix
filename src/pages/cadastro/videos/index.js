import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroVideo(){
    return(
      <PageDefault>
        <h1>Cadastro de video</h1> 
        {/* o to substitui o href */}
        <Link to = "/cadastro/categoria">
            Cadastro Categoria
        </Link>
      </PageDefault>
  
    )
  
  }

  export default CadastroVideo;