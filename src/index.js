import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/globalStyles';
import Nav from "./containers/Nav"
import Planos from "./containers/Planos"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav/>
    <Planos/>
    <GlobalStyles/>
  </>
);