import styled, { keyframes } from 'styled-components'

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
    box-shadow: 5px 1px 50px rgb(174 174 174 / 15%);
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

// const anim = keyframes`
//     from {
//         transform: background-position(0px 0px);
//     };

//     to {
//         transform: background-position(10px 10px);
//     };
// `

const Items = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    height: 100%;
    align-items: center;

    .study,.dictionary{
        cursor: pointer;
        font-size: 15px;
    }

    a{
        color: #04064f;
    }

    .active{
        display: flex;
        align-items: center;
        height: 100%;
        padding: 17px 10px;
        background: #04064f;
        border-radius: 0 0 16px 16px;
        color: #fbb5c1;
    }
`


export {CustomNav, Wrapper, LogoBox, Items};