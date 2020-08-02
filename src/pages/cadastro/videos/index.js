import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrao',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c&t',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriaRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        // alert('Video Cadastrado com sucesso');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });

        history.push('/');
      }}
      >
        <FormField
          label="Titulo do Video: "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL: "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="categorias: "
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={ categoryTitles }
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      {/* o to substitui o href */}
      <Link to="/cadastro/categoria">
        Cadastro Categoria
      </Link>
    </PageDefault>

  );
}

export default CadastroVideo;
