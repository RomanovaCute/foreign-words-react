import React, { useState, useEffect } from 'react';
import {InputsList, ButtonsList, ListItem} from './styles'
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';

const List = observer(({ctrl}, props) => {
    const {displayTrue, displayFalse} = props;

    const [isEmpty, setEmpty] = useState(false);
    const [edit, setEdit] = useState(null);

    const [data, setData]=useState({
        english: '',
        transcription: '',
        russian: '',
        tags: '',
      });

      const onChange = (e) => {
        setEmpty(!e.target.value);
    
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      }

      const saveWord = async (id) => {
        const newWord = {
          english: data.english,
          transcription: data.transcription,
          russian: data.russian,
          tags: data.tags
        }
        try {
          const res = await fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
            method: 'POST',
            body: JSON.stringify(newWord)
          })
          .then(res => res.json())
          .then(res => console.log(res))
    
          ctrl.list.find ((word, index) => {
            if (word.id === res.id) {
              runInAction(() => {
                ctrl.list[index] = res;
              });
              
              setEdit(newWord);
            }
          });
        } catch(e) {
          alert(`Ошибка соединения с сервером. ${e}`);
        };
      }
    
      const editWord = (id, english, transcription, russian, tags) => {
        setEdit(id);
        setData({
          english: english,
          transcription: transcription,
          russian: russian,
          tags: tags,
        })
      }
      
      const cancel = () => {
        ctrl.list = ctrl.list;
        setEdit(null)
      }

    const {register, formState: {errors, isDirty, isValid}, handleSubmit} = useForm();

    return (
    <div className='list-wrapper'>
            
                { ctrl.list.map(item => (
                    <ol key={item.id}>
                        <>
                            { edit === item.id &&
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
                                                defaultValue={data.english}
                                                onChange={onChange}
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
                                                defaultValue={data.russian}
                                                onChange={onChange}
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
                                                defaultValue={data.transcription}
                                                onChange={onChange}
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
                                                defaultValue={data.tags}
                                                onChange={onChange}
                                            />
                                            {errors.category?.type === 'required' ? <span className='error'>Это поле обязательно!</span> : <></>}
                                            {errors.category?.type === 'pattern' ? <span className='error'>Только буквы</span> : <></>}
                                        </ListItem>
                                        
                                        <ButtonsList>
                                            <button className='save-btn' type='submit' disabled={(!isDirty && !isValid && !errors)} display={displayFalse} onClick={() => saveWord(item.id)}>Save</button>
                                            <button className='cancel-btn' display={displayFalse} onClick={() => cancel()}>Cancel</button>
                                        </ButtonsList>
                                    </InputsList>
                            }
                        </>
                        <>
                            { !edit &&
                                <InputsList>
                                    <div className='not-edit'>{item.english}</div>
                                    <div className='not-edit'>{item.russian}</div>
                                    <div className='not-edit'>{item.transcription}</div>
                                    <div className='not-edit'>{item.tags}</div>
                            
                                    <ButtonsList>
                                        <button className='edit-btn' display={displayTrue} onClick={() => editWord(item.id, item.english, item.transcription, item.russian, item.tags)}>Edit</button>
                                        <button className='delete-btn' display={displayTrue} onClick={() => ctrl.deleteWord(item.id)}>Delete</button>
                                    </ButtonsList>
                            </InputsList>
                            }
                        </>
                    </ol>
                    ))
                }
    </div>
    )
})


export default List;