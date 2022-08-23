import styled from 'styled-components'

const InputsList = styled.ul((props) => {

    let color = '#f7f5f5'  
    let displayTrue = 'block';
    let displayFalse = 'block';

    if(props.isSelected === 'true'){
        color = '#c3d2eb';
        displayTrue = 'block';
        displayFalse = 'none';
    } else if(props.isSelected === 'false'){
        displayTrue = 'none';
        displayFalse ='block';
    }

    return `
        display: grid;
        grid-template-columns: 15% 15% 15% 15% 30%;
        padding: 0;
        column-gap: 5px;
        border-radius: 16px;

        input{
            margin: 15px 15px 15px 15px;
            height: 40px;
            padding-left: 15px;
            border: none;
            border-radius: 16px;

            &:focus{
                border: 2px solid #713bc1;
                outline: none;
            }
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
	        box-sizing: border-box;
	        margin: 15px 0 15px 15px;
	        outline: none;
	        border: none;
	        border-radius: 12px;
	        height: 46px;
	        line-height: 46px;
            font-family: 'Vag world bold';
            letter-spacing: 1.2px;
	        font-size: 14px;
	        font-weight: 600;
	        text-decoration: none;
	        color: #fff;
	        box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	        cursor: pointer;
	        transition: box-shadow 0.2s;

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

            .save-btn{
                border: 2px solid green;
                background-color: #51c051;
                display: ${displayTrue}
            }
            .cancel-btn{
                border: 2px solid #5408e7;
                background-color: #9999FF;
                display: ${displayTrue}
            }
            .edit-btn{
                border: 2px solid #eb6916;
                background-color: #f89e43;
                display: ${displayFalse}
            }
            .delete-btn{
                border: 2px solid #a51111;
                background-color: #ea5959;
                display: ${displayFalse}
            }
    
        background: ${color}

        
    `
})

const ButtonsList = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 5px;
`

const List = props =>{
    const {color, isSelected, displayTrue, displayFalse} = props;

    return (
    <div className='list-wrapper'>
            <ol>
                <InputsList className='inputs' isSelected={isSelected} color={color}>
                    <input type="text" className='word' placeholder='Enter the word' value={props.word}/>
                    <input type="text" className='translate' placeholder='Enter the translation' value={props.translate}/>
                    <input type="text" className='trascription' placeholder='Enter the word' value={props.transcript}/>
                    <input type="text" className='category' placeholder='Enter the category' value={props.tag}/>
                    
                    <ButtonsList>
                        <button className='edit-btn' display={displayTrue}>Edit</button>
                        <button className='delete-btn' display={displayTrue}>Delete</button>
                        <button className='save-btn' display={displayFalse}>Save</button>
                        <button className='cancel-btn' display={displayFalse}>Cancel</button>
                    </ButtonsList>
                </InputsList>
            </ol>
    </div>
    )
}

export default List;