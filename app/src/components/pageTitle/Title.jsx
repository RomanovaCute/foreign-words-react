import {TitleWrapper, TitleBox} from './styles'

function Title(props){
    return(
        <TitleWrapper>
            <TitleBox>
                <h2 className='title'>{props.title}</h2>
            </TitleBox>
        </TitleWrapper>
    )
}

export default Title;