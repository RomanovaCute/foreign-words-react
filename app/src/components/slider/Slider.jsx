import nextButton from '../../images/next.png'
import prevButton from '../../images/back.png'
import React, { useState } from 'react';
import Card from '../card/Card';
import ProgressBar from '../progressBar/Progress'
import {Wrapper, Container, Button, CardBox, ProgressBox, CounterBox} from './styles'


function Slider({words}){
    const [slideIndex, setSlideIndex] = useState(1);
    const [wordCount, setwordCount] = useState(0);
    const [wordLearned, setwordLearned] = useState([]);

    
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
    console.log(id);
        let arr = [...wordLearned];
        arr.push(id);

        let result = [];
        for(let num of arr){
            if(!result.includes(num)){
                result.push(num);
            }
        }
        setwordLearned(result);
        setwordCount(result.length)
    };

    const wordsItem = words.map((item) => {
        const {id, ...wordProps} = item;

        return (
            <Card
                key={id}
                id={id}
                knownWords={knownWords}
                {...wordProps}
            />
        )      
    })

    
    return(
        <Wrapper>
            <ProgressBox>
                <CounterBox>
                    <span>Progress</span>
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
                    {wordsItem[slideIndex - 1]}
                </CardBox>
                <Button className='next' onClick={nextCard}>
                    <img className='next-arrow' src={nextButton}></img>
                </Button>
            </Container>
            
        </Wrapper>
    )
}

export default Slider;