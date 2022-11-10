import nextButton from '../../images/next.png'
import prevButton from '../../images/back.png'
import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import ProgressBar from '../progressBar/Progress'
import { Wrapper, Container, Button, CardBox, ProgressBox, CounterBox } from './styles'
import { Storage } from '../../store/wordsStore';
import { observer } from 'mobx-react-lite';

export const Slider = observer(() => {
    const [Ctrl] = useState(new Storage())
    const [slideIndex, setSlideIndex] = useState(1);
    const [wordCount, setwordCount] = useState(0);
    const [wordLearned, setwordLearned] = useState([]);
    const [words, setWords] = useState([]);

    useEffect(() => {
        Ctrl.getWords()
    }, [])

    
    const nextCard = () => {
        if(slideIndex !== Ctrl.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === Ctrl.length){
            setSlideIndex(1)
        }
    }

    const prevCard = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(Ctrl.length);
        }
    }
    
   const knownWords = (id) => {
        let arr = [...wordLearned];
        arr.push(id);

        let result = [];
        for(let num of arr){
            if(!result.includes(num)){
                result.push(num);
            }
        }
        setwordLearned(result);
        setwordCount(result.length);
    };

    const object = Ctrl.list.map((item) => {
        Card.defaultProps = {
          english: 'english', 
          russian: 'russian', 
          transcription:'transcription', 
          tags:'tags'
        }
    
        return (
            <Card
              key={item.id}
              id={item.id}
              word={item.english}
              translate={item.russian}
              transcription={item.transcription}
              knownWords={knownWords}
            />
        )      
    })


    return(
        <Wrapper>
            <ProgressBox>
                <CounterBox>
                    <span className='progress-subtitle'>Progress</span>
                    <div className='counter'>
                        <span className='current-word'>{wordCount} </span> 
                        <span className='total-words'>/ {Ctrl.list.length}</span>
                    </div>
                </CounterBox>
                <ProgressBar completed={wordCount} maxCompleted={Ctrl.list.length}></ProgressBar>
            </ProgressBox>
            
            <Container>
                <Button className='prev' onClick={prevCard}>
                    <img className='prev-arrow' src={prevButton}></img>
                </Button>
                <CardBox>
                    {object[slideIndex - 1]}
                </CardBox>
                <Button className='next' onClick={nextCard}>
                    <img className='next-arrow' src={nextButton}></img>
                </Button>
            </Container>
        </Wrapper>
    )
})