import styled from 'styled-components'

const CustomNav = styled.div`
    position: sticky;
    top: 0;
    height: 10vh;
    display: flex;
    flex-direction: row;
    background: white;
    font-family: 'GeorgeRounded';
    color: #04064f;
    font-weight: bold;
    font-size: 18px;
    // box-shadow: 5px 1px 50px rgb(167 167 167 / 50%);
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
    grid-gap: 15px;
    font-size: 25px;
    color: #070a66;

    img{
        width: 7%;
        border-radius: 11px;
    }
`

const Items = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    .study,.dictionary{
        cursor: pointer;
        font-size: 15px;
    }

    a{
        color: #070a66;
    }
`

export {CustomNav, Wrapper, LogoBox, Items};