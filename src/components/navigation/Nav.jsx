import logo from '../../images/logo.png'
import {CustomNav, Wrapper, LogoBox, Items} from './styles'

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