import config from '../config';

const VIDEOS_URL = `${config.URL}/videos`;

function create(objetoDoVideo) {
  return fetch(`${VIDEOS_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo), 
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        // eslint-disable-next-line no-console
        //   console.log(config.URL);
        return resposta;
      }

      throw new Error('Nao foi possivel cadastrar os dados');
    });
}

export default {
  create,
};
