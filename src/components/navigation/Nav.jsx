import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import {CustomNav, Wrapper, LogoBox, Items} from './styles'


function Nav(){
    return (
        <CustomNav>
            <Wrapper>
                <Link to="/">
                    <LogoBox>
                        <img src={logo} alt='logo'></img>
                        <span className='logo-text'>Vocaby</span>
                    </LogoBox>
                </Link>
                <Items>
                    <Link to="/">Home</Link>
                    <Link to="/study">Study</Link>
                    <Link to="/dictionary">Dictionary</Link>
                </Items>
            </Wrapper>
        </CustomNav>
    );
}

export default Nav;