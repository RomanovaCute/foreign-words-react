import styled from 'styled-components'
import logo from '../../images/logo.png'

const CustomNav = styled.div`
    display: flex;
    flex-direction: row;

    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    
    font-family: 'Varela Round';
    font-weight: bold;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    width: 100%;
`

const LogoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 10px;

    img{
        width: 10%;
        border-radius: 16px;
    }
`

function Nav(){
    return (
        <CustomNav>
            <Wrapper>
                <LogoBox>
                    <img src={logo} alt='logo'></img>
                    <span className='logo-text'>LearnIT</span>
                </LogoBox>
                <div className='items'>
                     <div className='study'>
                        <span className="study-text">Study</span>
                    </div>
                    <div className='dictionary'>
                        <span className='dictionary-text'>Dictionary</span>
                    </div>
                </div>
            </Wrapper>
        </CustomNav>
    );
}

export default Nav;