import nextButton from '../../images/next.png'
import prevButton from '../../images/back.png'
import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import ProgressBar from '../progressBar/Progress'
import {Wrapper, Container, Button, CardBox, ProgressBox, CounterBox} from './styles'
// import useLocaleStorage from '../hooks/useLocaleStorage'

function Slider(){
    const [slideIndex, setSlideIndex] = useState(1);
    const [wordCount, setwordCount] = useState(0);
    const [wordLearned, setwordLearned] = useState([]);
    const [words, setWords] = useState([]);

    // const currentAmount = () => {
    //     localStorage.getItem('learnt');
    // }

    useEffect(() => {
        fetch(`https://6329d7e3d2c97d8c527202e1.mockapi.io/words`)
          .then(res => res.json())
          .then((json) => {
            setWords(json)
          })
          .catch((error) => {
            console.log(error);
            alert('Ошибка. Данные не получены')
          })
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
                    {wordsItem[slideIndex - 1]}
                </CardBox>
                <Button className='next' onClick={nextCard}>
                    <img className='next-arrow' src={nextButton}></img>
                </Button>
            </Container>
        </Wrapper>
    )
}

export default Slider ;