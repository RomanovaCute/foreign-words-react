import logo from '../../images/logo.png'
import  {FooterBox, FooterWrapper} from './styles'

function Footer(){
    return (
    <FooterBox>
        <FooterWrapper>
            <img src={logo} alt='logo'></img>
            <span className='footer-text'>ⓒ All rights reserved</span>
        </FooterWrapper>
    </FooterBox>
    )
}

export default Footer;