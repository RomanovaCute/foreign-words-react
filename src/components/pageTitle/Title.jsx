import {TitleWrapper, TitleBox} from './styles'

function Title(props){
    return(
        <TitleWrapper>
            <TitleBox>
                <h3 className='title'>{props.title}</h3>
            </TitleBox>
        </TitleWrapper>
    )
}

export default Title;