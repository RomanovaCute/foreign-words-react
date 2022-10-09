import React, { useState, useEffect } from 'react';
import {CustomCard, WordBox, Transcript, TrueWordBox, FalseWordBox, Meaning} from './styles'
import divider from '../../images/line.png'
import cardButton from '../button/buttons'
import { useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


function Card(props){
    const {word, transcription, img, translate, engMeaning, ruMeaning, id, knownWords} = props
    const [flip, setFlip] = useState(true);
    const button = useRef();
    const [amount, setAmount] = useLocalStorage([], 'amount');

    const handleClick = () => {
        setFlip(flip => !flip)
        knownWords(id);
        // setAmount([...amount])
    }

    useEffect(() => {
        button.current.focus();
    }, [flip])


    return (
    <CustomCard>
        <TrueWordBox className={flip ? '' : 'open'} onClick={handleClick}>
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
                <button className='show-btn' ref={button} onClick={handleClick}>Show</button>
        </FalseWordBox>
    </CustomCard>
    )
}

export default Card;