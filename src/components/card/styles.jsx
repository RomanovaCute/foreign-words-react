import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'

const CustomCard = styled.div`
    display: flex;
    width: 100%;
    height: 360px;
    background: #fff;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-radius: 16px;
    perspective: 1000;

    .word, .translation{
        font-family: 'Evolventa';
        font-weight: bold;
        font-size: 25px;
        color: #04064f;
    }
`
const WordBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    align-items: center;
    gap: 20px;

    img{
        margin-top: 20px;
        width: 70%;
        border-radius: 20px;
    }
`

const Transcript = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
    width: 60%;
    gap: 20px;

    .transcription{
        font-family: system-ui;
        font-weight: 500;
        color: #04064f;
    }
`

const TrueWordBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex-direction: row;    
    transform: rotateX(180deg);
    backface-visibility: hidden;
    transition: transform 0.5s ease;
    background: #fff;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-radius: 16px;
    cursor: pointer;

    &.open {
        transform: rotateX(360deg);
    }
`

const pulse = keyframes` 
        from { 
            box-shadow: 0 0 0 0px rgb(82 191 82);; 
        }
        to { 
            box-shadow: 0 0 0 10px rgba(18,123,230, 0); 
        }
`

const FalseWordBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: 'Vag world bold';
    font-size: 20px;
    color: #04064f;
    position: absolute;    
    backface-visibility: hidden;
    transition: transform 0.5s ease;
    background: #fff;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-radius: 16px;

    span{
        visibility: hidden;
        opacity: 0;
        transition: 0.3s opacity, 0.3s visibility;
    }

    h3{
        width: 100%;
    }

    &:hover span{
        opacity: 1;
        visibility: visible;
    }

    &.close {
        transform: rotateX(180deg);
    }

    .show-btn{
        display: flex; 
        justify-content: center; 
        align-items: center; 
        margin: 15px 0 15px 15px; 
        border-radius: 12px;
	    height: 46px;
        width: 30%;
        color: #fff; 
        background-color: #51c051;
        font-size: 14px;
	    font-weight: 600;
        color: #fff;
        font-family: 'Vag world bold';
        letter-spacing: 1.2px;
        cursor: pointer;

        &:focus{
            border: 2px solid green;
            animation: ${pulse} 1s infinite;
        }
    }
`

const Meaning = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    text-align: start;
    line-height: 18px;
    color: #04064f;

    .divider{
        width: 100%;
        height: 15px;
        opacity: 30%;
        filter: contrast(0.5);
    }

    .meaning-title{
        font-family: system-ui;
        font-weight: bold;
    }
`

export {CustomCard, WordBox, Transcript, TrueWordBox, FalseWordBox, Meaning};