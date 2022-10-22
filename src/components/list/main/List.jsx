import React, { useState, useEffect } from 'react';
import {InputsList, ButtonsList, ListItem} from './styles'
import { useForm } from 'react-hook-form';

const List = props =>{
    const {displayTrue, displayFalse} = props;
    const DEFAULT_VALUES = {
        word: props.word,
        translate: props.translate,
        transcript: props.transcript,
        category: props.tag
    };

    const [isEdit, setEdit] = useState(false);
    const {register, formState: {errors, isDirty, isValid}, handleSubmit} = useForm({
        defaultValues: DEFAULT_VALUES
    });

    
    const onSubmit = (data) => {
        setEdit(false)
        console.log(data);
    }

    const handleClick = () =>{
        setEdit(isEdit => !isEdit)
    }

    return (
    <div className='list-wrapper'>
            <ol>
                    { isEdit &&
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputsList style={{background: '#c3d2eb'}}>
                                <ListItem>
                                        <input 
                                        {...register ('word', {
                                            required: true,
                                            pattern: /^[a-zA-Z]/
                                        })} 
                                        type="text" 
                                        name='word' 
                                        placeholder='Enter the word'
                                        className={errors.word ? 'input-error' : ''}
                                    />
                                    {errors.word?.type === 'required' ? <span className='error'>Это поле обязательно!</span> : <></>}
                                    {errors.word?.type === 'pattern' ? <span className='error'>Только буквы</span> : <></>}
                                </ListItem>
                                <ListItem>
                                    <input 
                                        {...register ('translate', {
                                            required: true,
                                            pattern: /^[а-яА-Я]/
                                        })} 
                                        type="text"
                                        name='translate'  
                                        placeholder='Enter the translation'
                                        className={errors.translate ? 'input-error' : ''}
                                    />
                                    {errors.translate?.type === 'required' ? <span className='error'>Это поле обязательно!</span> : <></>}
                                    {errors.translate?.type === 'pattern' ? <span className='error'>Только буквы</span> : <></>}
                                </ListItem>
                                <ListItem>
                                    <input 
                                        {...register('transcript', {
                                            required: true,
                                            pattern: /[^\d]/gm
                                        })}
                                        type="text" 
                                        name='transcript'  
                                        placeholder='Enter the word'
                                        className={errors.transcript ? 'input-error' : ''}
                                    />
                                    {errors.transcript?.type === 'required' ? <span className='error'>Это поле обязательно!</span> : <></>}
                                    {errors.transcript?.type === 'pattern' ? <span className='error'>Только буквы и символы</span> : <></>}
                                </ListItem>
                                <ListItem>
                                    <input 
                                        {...register('category', {
                                            required: true,
                                            pattern: /^[a-zA-Z]/
                                        })}
                                        type="text" 
                                        name='category'  
                                        placeholder='Enter the category'
                                        className={errors.category ? 'input-error' : ''}
                                    />
                                    {errors.category?.type === 'required' ? <span className='error'>Это поле обязательно!</span> : <></>}
                                    {errors.category?.type === 'pattern' ? <span className='error'>Только буквы</span> : <></>}
                                </ListItem>
                                
                                <ButtonsList>
                                    <button className='save-btn' type='submit' disabled={(!isDirty && !isValid && !errors)} display={displayFalse}>Save</button>
                                    <button className='cancel-btn' display={displayFalse} onClick={handleClick}>Cancel</button>
                                </ButtonsList>
                            </InputsList>
                        </form>
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

// disabled={!isDirty && !isValid}

export default List;