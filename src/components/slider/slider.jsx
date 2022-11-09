import { WordsContext } from '../../Context'
import nextButton from '../../images/next.png'
import prevButton from '../../images/back.png'
import React, { useState, useEffect, useContext } from 'react';
import Card from '../card/Card';
import ProgressBar from '../progressBar/Progress'
import {Wrapper, Container, Button, CardBox, ProgressBox, CounterBox} from './styles'
import { set } from 'react-hook-form';


function Slider(){
    const [slideIndex, setSlideIndex] = useState(1);
    const [wordCount, setwordCount] = useState(0);
    const [wordLearned, setwordLearned] = useState([]);
    const [words, setWords] = useState([]);
    const {isLoading, list} = useContext(WordsContext);

    useEffect(() => {
        setWords(list.length)
        console.log(list.length);
    }, [])
    
    
    const nextCard = () => {
        if(slideIndex !== words.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === words.length){
            setSlideIndex(1)
        }
    }

    const prevCard = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(words.length);
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
        localStorage.setItem('learnt', JSON.stringify(wordLearned))
    };


    const data = list.map((item) => {
        Card.defaultProps = {
            english: 'english', 
            russian: 'russian', 
            transcription:'transcription',
          }

        return (
            <Card
                key={item.id}
                id={item.id}
                knownWords={knownWords}
                word={item.english}
                transcription={item.transcription}
                translate={item.russian}
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
                        <span className='total-words'>/ {words.length}</span>
                    </div>
                </CounterBox>
                <ProgressBar completed={wordCount} maxCompleted={words.length}></ProgressBar>
            </ProgressBox>
            
            <Container>
                <Button className='prev' onClick={prevCard}>
                    <img className='prev-arrow' src={prevButton}></img>
                </Button>
                <CardBox>
                    {data[slideIndex - 1]}
                </CardBox>
                <Button className='next' onClick={nextCard}>
                    <img className='next-arrow' src={nextButton}></img>
                </Button>
            </Container>
        </Wrapper>
    )
}

export default Slider ;