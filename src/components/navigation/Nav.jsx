import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import {CustomNav, Wrapper, LogoBox, Items} from './styles'


function Nav(){
    return (
        <CustomNav>
            <Wrapper>
                <Link to="/foreign-words-react">
                    <LogoBox>
                        <img className='logo-pic' src={logo} alt='logo'></img>
                        <span className='logo-text'>Vocaby</span>
                    </LogoBox>
                </Link>
                <Items>
                    <NavLink to="/foreign-words-react">Home</NavLink>
                    <NavLink to="/study">Study</NavLink>
                    <NavLink to="/dictionary">Dictionary</NavLink>
                    <NavLink to="/sprint">Sprint</NavLink>
                </Items>
            </Wrapper>
        </CustomNav>
    );
}

export default Nav;