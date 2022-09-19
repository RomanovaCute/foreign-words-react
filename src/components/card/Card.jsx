import React, { useState, useEffect } from 'react';
import {CustomCard, WordBox, Transcript, TrueWordBox, FalseWordBox, Meaning} from './styles'
import divider from '../../images/line.png'



function Card(props){
    const {word, transcription, img, translate, engMeaning, ruMeaning, id, knownWords} = props
    const [flip, setFlip] = useState(true);

    const handleClick = () => {
        setFlip(flip => !flip)
        knownWords(id);
    }


    return (
    <CustomCard onClick={handleClick}>
        <TrueWordBox className={flip ? '' : 'open'}>
            <WordBox>
                <h3 className="word">{word}</h3> 
                <span className="transcript">{transcription}</span>
                <img className="photo" src={img}></img>
            </WordBox>
            <Transcript>
            <div className="translate-box">
                <h3 className="translation">{translate}</h3>
            </div>
            <Meaning>
                <span className="meaning-title">Meaning</span>
                <div className="eng-meaning-box">
                    <span className="eng-meaning">{engMeaning}</span>
                </div>
                <img className="divider" src={divider}></img>
                <div className="ru-meaning-box">
                    <span className="ru-meaning">{ruMeaning}</span>
                </div>
            </Meaning>
            </Transcript>
        </TrueWordBox>
        <FalseWordBox className={flip ? '' : 'close'}>
                <h3 className='word'>{word}</h3>
                <span>Click to learn the translation</span>
        </FalseWordBox>
    </CustomCard>
    )
}

export default Card;