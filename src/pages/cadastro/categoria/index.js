/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,

    });
  }

  // console.log(nomeCategoria);

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('alo alo brasil');
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor)=>{
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
// mesma coisa para resgatar os dados de formas diferentes a de cima e a mais pratica
    // .then((respostaDoServidor) => {
    //     return respostaDoServidor.json();
    // })
    // .then((respostaConvertidaEmObjeto) => {
    //     console.log(respostaConvertidaEmObjeto);
    // })
    // ;
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanudass',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Uma categoria bacanudass',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      {/* com essa funcao no form tira o reload da pagina toda vez que for cadastrar alguma categoria */}
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log('Voce tentou enviar o form');
        setCategorias([
          ...categorias,
          values,
          // os ... pega todos os itens que ja foram escritos
        ]);
        setValues(valoresIniciais);
      }}
      >
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
          type="textarea"
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

        <Button>
          Cadastrar
        </Button>

      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      {/* o to substitui o href */}
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>

  );
}

export default CadastroCategoria;
