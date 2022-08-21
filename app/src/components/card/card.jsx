import styled from 'styled-components'

const CustomCard = styled.div`
    display: flex;
    width: 30%;
    // position: absolute;
    background: #fff;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-radius: 16px;
`
const WordBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 30%;
    align-items: center;
`
const Transcript = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 50%;
`

function Card(props){
    return (
    <CustomCard>
        <WordBox>
            <h3 className="word">{props.word}</h3>
            <span className="transcript">{props.transcript}</span>
            <img className="sound" src={props.img}></img>
        </WordBox>
        <Transcript>
            <div className="translate-box">
                <span className="translation">{props.translate}</span>
            </div>
            <div className="meaning-box">
                <h4 className="meaning-title">Meaning</h4>
                <div className="eng-meaning-box">
                    <span className="eng-meaning">{props.engMeaning}</span>
                </div>
                <div className="ru-meaning-box">
                    <span className="ru-meaning">{props.ruMeaning}</span>
                </div>
            </div>
        </Transcript>
    </CustomCard>
    )
}

export default Card;