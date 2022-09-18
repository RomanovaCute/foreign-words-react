import notfound from '../../../images/LayingDoodle.png'
import styled from 'styled-components';

const ErrorPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    justify-content: center;
    background: white;
    height: 82vh;
    justify-content: space-evenly;

    img{
        width: 50%
    }

    h3{
        font-family: 'Vag world bold';
        color: #04064f;
        font-size: 30px;
    }
`


function NotFoundpage(){
    return(
        <ErrorPage>
            <img src={notfound}></img>
            <h3>Ooops! We couldn't find such a page.</h3>
        </ErrorPage>
    )
    
}

export default NotFoundpage;