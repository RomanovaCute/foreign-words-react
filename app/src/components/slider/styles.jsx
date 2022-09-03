import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    width: 20%;
    height: 20%;
    border: none;
    background: none;
    cursor: pointer;
    
    img{
        width: 20%;
        transition: transform ease 0.15s;
    }

    &:active .next-arrow{
        transform: translateX(7px);
    }
    
    &:active .prev-arrow{
        transform: translateX(-7px);
    }
`


const CardBox = styled.div`
    display: flex;
    width: 30%;
    justify-content: center;
`

export {Wrapper, Container, Button, CardBox};