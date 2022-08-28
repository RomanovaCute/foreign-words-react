import styled from 'styled-components'
import ContextualExample from '../progressBar/Progress'

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: flex-start;
    padding:0 50px;
    font-family: 'Vag world bold';
    color: #04064f;
    font-size: 20px;
`
const TitleBox = styled.div`
    display: flex;
    justify-content; flex-start;
    padding: 20px 0;
`

function Title(props){
    return(
        <TitleWrapper>
            <TitleBox>
                <h2 className='title'>{props.title}</h2>
            </TitleBox>
            <ContextualExample></ContextualExample>
        </TitleWrapper>
    )
}
//здесь еще должен быть прогрессбар

export default Title;