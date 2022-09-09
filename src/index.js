import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Vag from './fonts/vag_world_bold.woff'
import Vag2 from './fonts/vag_world_bold.woff2'


const GlobalStyles = createGlobalStyle`
    @font-face{
      font-family: 'Vag world bold';
      src: url(${Vag}) format('woff'),
      url(${Vag2}) format('woff2')
    }
    
    body{
      margin: 0;
      font-family: sans-serif;
    }
    
    .main{
      background: #f7f5f5;
      display: flex;
      height: 80%;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .cards-wrapper{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    li{
      list-style: none;
    }

    h1, h2, h3, h4, h5, h6{
      margin: 0;
    }

    .cards-wrapper{
      margin-bottom: 40px;
    }

    .dictionary-wrapper{
      margin-top: 35px;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

reportWebVitals();
