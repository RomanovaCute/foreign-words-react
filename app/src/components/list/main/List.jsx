import React, { useState } from 'react';
import {InputsList, ButtonsList} from './styles'

const List = props =>{
    const {displayTrue, displayFalse} = props;
    const [isEdit, setEdit] = useState(false);

    const handleClick = () =>{
        setEdit(isEdit => !isEdit)
    }

    return (
    <div className='list-wrapper'>
            <ol>
                    { isEdit &&
                         <InputsList style={{background: '#c3d2eb'}}>
                            <input type="text" className='word' placeholder='Enter the word' defaultValue={props.word}/>
                            <input type="text" className='translate' placeholder='Enter the translation' defaultValue={props.translate}/>
                            <input type="text" className='trascription' placeholder='Enter the word' defaultValue={props.transcript}/>
                            <input type="text" className='category' placeholder='Enter the category' defaultValue={props.tag}/>
                          
                            <ButtonsList>
                                <button className='save-btn' display={displayFalse} onClick={handleClick}>Save</button>
                                <button className='cancel-btn' display={displayFalse} onClick={handleClick}>Cancel</button>
                            </ButtonsList>
                        </InputsList>
                    }
                    { !isEdit &&
                        <InputsList>
                            <div className='not-edit'>{props.word}</div>
                            <div className='not-edit'>{props.translate}</div>
                            <div className='not-edit'>{props.transcript}</div>
                            <div className='not-edit'>{props.tag}</div>
                      
                            <ButtonsList>
                                <button className='edit-btn' display={displayTrue} onClick={handleClick}>Edit</button>
                                <button className='delete-btn' display={displayTrue}>Delete</button>
                            </ButtonsList>
                       </InputsList>
                    }
            </ol>
    </div>
    )
}

export default List;