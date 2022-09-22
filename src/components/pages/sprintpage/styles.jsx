import styled from "styled-components";

const TestWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h3{
        font-family: 'Vag world bold';
        font-size: 25px;
        color: #070a66;
    }

    button{
            display: flex;
            justify-content: center;
            align-items: center;
	        box-sizing: border-box;
	        margin: 10px;
            width: 85%;
	        outline: none;
	        border: none;
	        border-radius: 16px;
	        height: 46px;
            font-family: 'Vag world bold';
            letter-spacing: 1.2px;
	        font-size: 14px;
	        font-weight: 600;
	        text-decoration: none;
	        color: #fff;
	        box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	        cursor: pointer;
	        transition: box-shadow 0.2s;
            border: 2px solid green;
            background-color: #51c051;

            &:focus-visible {
                border: 1px solid #4c51f9;
                outline: none;
            }
            &:hover {
                transition: all 0.2s;
                box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);
                border: 2px solid white;
            }
            &:active {
                background-color: #808080;
            }
    }
`
const TestBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuestionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 45vh;
    gap: 35px;
    border-radius: 16px;
    background: #f5f5f5;
    box-shadow: 0 5px 28px rgb(0 0 0 / 15%), 0px 5px 28px rgb(0 0 0 / 20%);
`

const CurrentQuestion = styled.div`
    font-family: 'Evolventa';
    font-size: 25px;
    font-weight: 600;
    color: #070a66;
`

const Variants = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: 'Evolventa';
    font-size: 17px;
`

const Item = styled.li`
    display: flex;
    width: 15vw;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: #04064f;
    color: white;
    cursor: pointer;
    border-radius: 16px;

    &:focus-visible {
        border: 1px solid #4c51f9;
        outline: none;
    }
    &:hover {
        transition: all 0.2s;
        box-shadow: 0 5px 28px rgb(0 0 0 / 15%), 0 5px 5px rgb(0 0 0 / 15%);
    }
    &:active {
        background-color: #808080;
    }
`

const ResultBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 45vh;
    border-radius: 16px;
    background: #f5f5f5;
    box-shadow: 0 5px 28px rgb(0 0 0 / 15%), 0 5px 28px rgb(0 0 0 / 20%);

    img{
        margin-bottom: 45px;
    }

    .result-text{
        font-family: 'Evolventa';
        font-size: 20px;
        font-weight: 600;
        color: #04064f;
    }

    a{
        width: 35%;
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }

    .again-test{
        display: flex;
            justify-content: center;
            align-items: center;
	        box-sizing: border-box;
	        margin: 10px;
            width: 85%;
	        outline: none;
	        border: none;
	        border-radius: 16px;
	        height: 46px;
            font-family: 'Vag world bold';
            letter-spacing: 1.2px;
	        font-size: 14px;
	        font-weight: 600;
	        text-decoration: none;
	        color: #fff;
	        box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	        cursor: pointer;
	        transition: box-shadow 0.2s;
            border: 2px solid #c66502;
            background-color: #f89e43;

            &:focus-visible {
                border: 1px solid #4c51f9;
                outline: none;
            }
            &:hover {
                transition: all 0.2s;
                box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);
                border: 2px solid white;
            }
            &:active {
                background-color: #808080;
            }
    
    
}
`




















export {TestWrapper, Intro, TestBox, QuestionBox, CurrentQuestion, Variants, Item, ResultBox};