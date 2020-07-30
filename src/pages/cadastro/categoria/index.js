import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria(){
  const [categorias, setCategorias] = useState([]);
  
  const valoresIniciais ={
    nome: '',
    descricao: '' ,
    cor:'',
  }

  const [values, setValues] =  useState(valoresIniciais);

function setValue(chave,valor){
  setValues({
    ...values,
    [chave]: valor,

  })

}
  
  // console.log(nomeCategoria);
  
function handleChange(infosDoEvento){
  
  setValue(
    infosDoEvento.target.getAttribute('name'),
    infosDoEvento.target.value
  )
}


    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1> 
      {/* com essa funcao no form tira o reload da pagina toda vez que for cadastrar alguma categoria */}
      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        console.log('Voce tentou enviar o form')
        setCategorias([
          ...categorias,
          values
          // os ... pega todos os itens que ja foram escritos
        ]);
        setValues(valoresIniciais)
        
      }}>
      {/* {State} */}
      <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          tag="textarea"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* A parte de HTML foi levada para o formfield para nao ficar repetindo o codigo abaixo */}
        {/* <div>
        <label>
          Nome da Categoria:
          <input type="text"
            name="nome"
            value = {values.nome}
            onChange={handleChange}
            // onChange={function funcaoHandler(infosDoEvento){
              // vai capturar a mudanca mas nao muda por enquanto
              // console.log(nomeDaCategoria);
              // vai capturar a tecla e a mudanca mas nao coloca a mudanca no input
              // console.log('[infosDoEvento]', infosDoEvento.target.value);
              // vai atualizar ao mesmo tempo que escreve no input
              // setNomeDaCategoria(infosDoEvento.target.value);
              // setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
              // recebe os campos dinamicamente
          />
        </label>
        </div> */}
       
        {/* <div>
        <label>
          Descricao:
          <input type="text"
            name="descricao"
            value = {values.descricao}
            onChange={handleChange}
          />
        </label>
        </div> */}

        {/* <div>
        <label>
          Cor:
          <input type="color"
            name="cor"
            value = {values.cor}
            onChange={handleChange}
          />
        </label>
        </div> */}
        
        <button>
          Cadastrar
        </button>

      </form>

        <ul>
          {categorias.map((categoria, indice)=>{
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          } )}
        </ul>

        {/* o to substitui o href */}
        <Link to = "/">
            Ir para Home
        </Link>
      </PageDefault>
  
    )
  
  }

  export default CadastroCategoria;