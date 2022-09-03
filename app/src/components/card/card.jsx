import React, { useState } from 'react';
import {CustomCard, WordBox, Transcript, TrueWordBox, FalseWordBox, Meaning} from './styles'


function Card(props){
    const {word, transcript, img, translate, engMeaning, ruMeaning, id, knownWords} = props
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
        <FalseWordBox className={flip ? '' : 'close'}>
                <h3 className='word'>{word}</h3>
                <span>Click to learn the translation</span>
        </FalseWordBox>
    </CustomCard>
    )
}

export default Card;