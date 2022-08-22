import styled from 'styled-components'
import logo from '../../images/logo.png'

const CustomNav = styled.div`
    display: flex;
    flex-direction: row;

    font-family: 'Vag world bold';
    color: #04064f;
    font-weight: bold;
    box-shadow: 5px 1px 50px rgb(167 167 167 / 50%);
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    width: 100%;
`

const LogoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 10px;

    img{
        width: 7%;
    }
`

const Items = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    .study,.dictionary{
        cursor: pointer;
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
                <Items>
                     <div className='study'>
                        <span className="study-text">Study</span>
                    </div>
                    <div className='dictionary'>
                        <span className='dictionary-text'>Dictionary</span>
                    </div>
                </Items>
            </Wrapper>
        </CustomNav>
    );
}

export default Nav;