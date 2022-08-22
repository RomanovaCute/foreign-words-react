import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
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
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
