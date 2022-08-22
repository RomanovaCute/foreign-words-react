import styled from 'styled-components'

const InputsList = styled.ul((props) => {

    let color = '#f7f5f5'  
    // let display = 'block';

    if(props.isSelected === 'true'){
        color = '#c3d2eb';
        // display = 'none';
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
            display: inline-block;	
	        box-sizing: border-box;
	        margin: 15px 0 15px 15px;
	        outline: none;
	        border: none;
	        border-radius: 12px;
	        height: 46px;
	        line-height: 46px;
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
                background-color: #51c051;
            }
            .edit-btn{
                background-color: #f89e43;
            }
            .delete-btn{
                background-color: #ea5959;
            }
            .cancel-btn{
                background-color: #9999FF;
            }

        background: ${color}

        
    `
})

const ButtonsList = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    column-gap: 5px;
`

const List = props =>{
    const {color, isSelected} = props;

    return (
    <div className='list-wrapper'>
            <ol>
                <InputsList className='inputs' isSelected={isSelected} color={color}>
                    <input type="text" className='word' placeholder='Enter the word' value={props.word}/>
                    <input type="text" className='translate' placeholder='Enter the translation' value={props.translate}/>
                    <input type="text" className='trascription' placeholder='Enter the word' value={props.transcript}/>
                    <input type="text" className='category' placeholder='Enter the category' value={props.tag}/>
                    
                    <ButtonsList>
                        <button className='edit-btn'>Edit</button>
                        <button className='delete-btn'>Delete</button>
                        <button className='save-btn'>Save</button>
                        <button className='cancel-btn'>Cancel</button>
                    </ButtonsList>
                </InputsList>
            </ol>
    </div>
    )
}

export default List;