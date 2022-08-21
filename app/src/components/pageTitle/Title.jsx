import styled from 'styled-components'
import ContextualExample from '../progressBar/Progress'

const TitleBox = styled.div`
    display: flex;
    justify-content: flex-start;
    padding:0 40px;
    font-family: 'Vag world bold';
    color: #04064f;
    font-size: 20px;
`

function Title(props){
    return(
        <TitleBox>
            <h2 className='title'>{props.title}</h2>
            <ContextualExample></ContextualExample>
        </TitleBox>
    )
}
//здесь еще должен быть прогрессбар

export default Title;