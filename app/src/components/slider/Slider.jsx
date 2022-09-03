import nextButton from '../../images/next.png'
import prevButton from '../../images/back.png'
import React, { useState } from 'react';
import Card from '../card/Card';
import {Wrapper, Container, Button, CardBox} from './styles'


function Slider({words}){
    const [slideIndex, setSlideIndex] = useState(1);

    const prevCard = () => {
        if(slideIndex !== words.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === words.length){
            setSlideIndex(1)
        }
    }

    const nextCard = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(words.length);
          }
    }
    

    const wordsItem = words.map((item) => {
        const {id, ...wordProps} = item;

        return (
            <Card key={id}
            {...wordProps}/>
        )
            
    })

    return(
        <Wrapper>
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
            <div className="counter">Изучено слов: </div>
        </Wrapper>
    )
}

export default Slider;