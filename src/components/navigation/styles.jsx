import styled from 'styled-components'

const CustomNav = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    font-family: 'Vag world bold';
    color: #04064f;
    font-weight: bold;
    font-size: 18px;
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

export {CustomNav, Wrapper, LogoBox, Items};