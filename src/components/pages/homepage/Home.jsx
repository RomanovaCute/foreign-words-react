import mainPic from '../../../images/sprinting.gif'
import styled from 'styled-components'

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    justify-content: center;
    background: white;

    img{
        width: 57%;
    }

    h2{
        font-family: 'Vag world bold';
        color: #04064f;
        width: 30%;
        line-height: 55px;
        font-size: 50px;
        text-align: left;
    }
`


function Homepage(){
    return(
        <HomeWrapper>
            <h2>A New Way of Digital Learning</h2>
            <img src={mainPic}></img>
        </HomeWrapper>
    )
}

export default Homepage;