import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/globalStyles';
import Top from './containers/Topo';
import Slide from './containers/Slides';
import Nav from './containers/Nav';
import Planos from "./containers/Planos";
import Footer from "./containers/Footer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Top />
    <Nav />
    <Slide />
    <Planos />
    <Footer />
    <GlobalStyles />
  </>
);