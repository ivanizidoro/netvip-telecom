import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/globalStyles';
import Top from './containers/Topo'
import Slide from './containers/Slides'
import Nav from './containers/Nav'
import Planos from "./containers/Planos"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Top />
    <Nav />
    <Slide />
    <Planos />
    <GlobalStyles />
  </>
);