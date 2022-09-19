import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Vag from './fonts/vag_world_bold.woff'
import Vag2 from './fonts/vag_world_bold.woff2'
import GeorgeRounded from './fonts/GeorgeRoundedBold.woff'
import Evolventa from './fonts/Evolventa.woff'



const GlobalStyles = createGlobalStyle`
    @font-face{
      font-family: 'Vag world bold';
      src: url(${Vag}) format('woff'),
      url(${Vag2}) format('woff2')
    }

    @font-face{
      font-family: 'GeorgeRounded';
      src: url(${GeorgeRounded}) format('woff')
    }

    @font-face{
      font-family: 'Evolventa';
      src: url(${Evolventa}) format('woff')
    }
    
    body{
      margin: 0;
      font-family: sans-serif;
    }
    
    .main{
      background: #f7f5f5;
      display: flex;
      height: 80vh;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .cards-wrapper{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin-bottom: 40px;
    }

    li{
      list-style: none;
    }

    a{
      text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6{
      margin: 0;
    }

    .dictionary-wrapper, .study-wrapper{
      margin-top: 25px;
    }

    .dictionary-wrapper{
      overflow: scroll;
      overflow-x:hidden;

      &::-webkit-scrollbar {
        width: 7.5px;
      }
      
      &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
      }
      
      &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: #bbbbbb;
      }
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
