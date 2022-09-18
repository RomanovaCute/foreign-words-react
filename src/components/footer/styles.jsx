import styled from 'styled-components'

const FooterBox = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: #ff61611f;
    bottom: 0;
    font-family: 'Vag world bold';
    color: #04064f;
`
const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 40px;

    img{
        width: 2%;
        border-radius: 10px;
    }
`
export {FooterBox, FooterWrapper};