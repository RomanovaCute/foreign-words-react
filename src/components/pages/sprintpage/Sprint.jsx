import {useEffect, useState} from 'react';
import win from '../../../images/win.png'
import {TestWrapper, Intro, TestBox, QuestionBox, CurrentQuestion, Variants, Item, ResultBox} from './styles'


function Result(props){
    const {answer, questions} = props;

    return(
        <ResultBox>
            <img src={win}></img>
            <span className='result-text'>
                You answered correctly on {answer} out of {questions.length}.
            </span>
            <a href='/sprint'>
                <button className='again-test'>Try again!</button>
            </a>
        </ResultBox>
    )
}


function Test(props){
    const  {question,  yourAnswer} = props;

    return(
        <QuestionBox>
            <CurrentQuestion>Переведите слово: {question.question}</CurrentQuestion>
            <Variants>
                {
                    question.variants.map((item, index) => 
                        <Item onClick={() => yourAnswer(index)} className="variant-btn" key={item}>
                            {item}
                        </Item>
                    )
                }
            </Variants>
        </QuestionBox>
    )
}

function Sprintpage(){
    const [questions, setQuestions] = useState([]);
    const [isStart, setStart] = useState(false);

    useEffect(() => {
        fetch(`https://6329d7e3d2c97d8c527202e1.mockapi.io/questions`)
        .then(res => res.json())
        .then((json) => {
            setQuestions(json)
        })
        .catch((error) => {
            console.log(error)
            alert('Ошибка. Данные не получены')
        })
    }, [])

    const handleClick = () => {
        setStart(true)
    }


    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState(0);
    const question = questions[step];
    
    function yourAnswer(index) {
        setStep(step + 1);

        if(index === question.answer){
            setAnswer(answer + 1);
            console.log(answer);
        }
    };

    return(
        <TestWrapper>
        { isStart &&
            <TestBox>
                {
                    step !== questions.length ?
                    <Test question={question} questions={questions} yourAnswer={yourAnswer} step={step} /> :
                    <Result answer={answer} questions={questions} />
                }
            </TestBox>
        }
        { !isStart &&
            <Intro>
                <h3>Let's check your knowledge?</h3>
                <button onClick={handleClick}>Start!</button>
            </Intro>
        }
        </TestWrapper>
    )
}

export default Sprintpage;