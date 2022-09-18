import styled from 'styled-components'

const FooterBox = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 10vh;
    flex-direction: column;
    align-items: center;
    background: #fee5e5;
    bottom: 0;
    font-family: 'Vag world bold';
    font-size: 14px;
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