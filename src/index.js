import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
// apagou o servicework.js
// import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/videos';
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<div>
  Pagina 404
</div>)
// nao vai deixar a aplicacao atualizando toda hora, nao vai ficar fazendo um um request toda hora
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/cadastro/videos" component={CadastroVideo}/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    <Route path="/" component={Home} exact/>
    <Route component={Pagina404}/>
  </Switch>
  </BrowserRouter>,


  document.getElementById('root')
);
// apagou o servicework.js
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
