/* eslint-disable linebreak-style */
import config from '../config';

const CATEGORIES_URL = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${CATEGORIES_URL}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        // eslint-disable-next-line no-console
        //   console.log(config.URL);
        return resposta;
      }

      throw new Error('Nao foi possivel pegar os dados');
    });
}
function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        // eslint-disable-next-line no-console
        //   console.log(config.URL);
        return resposta;
      }

      throw new Error('Nao foi possivel pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
