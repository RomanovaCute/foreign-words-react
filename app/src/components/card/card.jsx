import React, { useState } from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(180deg);
  }
`

const CustomCard = styled.div`
    display: flex;
    width: 30%;
    height: 360px;
    background: #fff;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-radius: 16px;
    cursor: pointer;
`
const WordBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    align-items: center;

    img{
        margin-top: 20px;
        width: 70%;
        border-radius: 20px;
    }
`

const Transcript = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 60%;
`

const TrueWordBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`

const FalseWordBox = styled.div`
    display: flex;
    height: 350px;
    width: 100%;
    align-items: center;
    font-family: 'Vag world bold';
    font-size: 20px;
    color: #04064f;

    h3{
        width: 100%;
    }
`

const Meaning = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.85em;
    text-align: justify;
`


function Card(props){
    const {word, transcript, img, translate, engMeaning, ruMeaning} = props
    const [flip, setFlip] = useState(true);

    const handleClick = () => {
        setFlip(flip => !flip)
    }


    return (
    <CustomCard onClick={handleClick}>
        {!flip && 
        <TrueWordBox>
            <WordBox>
               <h3 className="word">{word}</h3> 
                <span className="transcript">{transcript}</span>
                <img className="photo" src={img}></img>
            </WordBox>
            <Transcript>
            <div className="translate-box">
                <span className="translation">{translate}</span>
            </div>
            <Meaning>
                <h4 className="meaning-title">Meaning</h4>
                <div className="eng-meaning-box">
                    <span className="eng-meaning">{engMeaning}</span>
                </div>
                <div className="ru-meaning-box">
                    <span className="ru-meaning">{ruMeaning}</span>
                </div>
            </Meaning>
            </Transcript>
        </TrueWordBox>
        }
        {flip &&
        <FalseWordBox>
                <h3 className='word'>{word}</h3>
        </FalseWordBox>
        }
    </CustomCard>
    )
}

export default Card;