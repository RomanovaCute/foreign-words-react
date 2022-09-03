import ContextualExample from '../progressBar/Progress'
import {TitleWrapper, TitleBox} from './styles'

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

export default Title;