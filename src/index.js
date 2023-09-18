import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
// import GlobalStyle from './style/GlobalStyle';
// import { ThemeProvider } from 'styled-components';
// import { darkTheme, whiteTheme } from './theme';
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
