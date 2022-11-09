import React, { useState, useContext } from 'react';
import {InputsList, ButtonsList, ListItem} from './styles'
import { useForm } from 'react-hook-form';
import { WordsContext } from '../../../Context';


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

    const {list, setList} = useContext(WordsContext);
    const [isEmpty, setEmpty] = useState(false);
    const [data, setData]=useState({
        english: '',
        transcription: '',
        russian: '',
        tags: '',
      });


    
    const onSubmit = (data) => {
        setEdit(false)
        console.log(data);
    }

    const handleClick = () =>{
        setEdit(isEdit => !isEdit)
    }

    const onChange = (e) => {
        setEmpty(!e.target.value);
    
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      }

    const deleteWord = async (id) => {
        let isDelete = window.confirm("Вы действительно хотите удалить это слово?");
        if (isDelete) {
        try {
          const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST',
          });
          if(res.ok) {
            let newList = [...list].filter(item => item.id!==id);
            setList(newList)
          };
        } catch(e) {
          alert(`Ошибка соединения с сервером. ${e}`);
        };
      }
      }
    
      const saveWord = async (id) => {
        const newWord = {
          english: data.english,
          transcription: data.transcription,
          russian: data.russian,
          tags: data.tags
        }
        try {
          const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
            method: 'POST',
            body: JSON.stringify(newWord)
          });
          if(res.ok) {
            let newList = [...list].map (item => {
              if (item.id === id) {
                item.english = data.english;
                item.transcription = data.transcription;
                item.russian = data.russian;
                item.tags = data.tags;
              }
              return item;
            });
            setList(newList);
            setEdit(null);
          }
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
        setList(list);
        setEdit(null)
      }

    return (
    <div className='list-wrapper'>
            { list.map(item => (
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
                                        defaultValue={item.english}
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
                                        defaultValue={item.russian}
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
                                        defaultValue={item.transcription}
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
                                        defaultValue={item.tags}
                                    />
                                    {errors.category?.type === 'required' ? <span className='error'>Это поле обязательно!</span> : <></>}
                                    {errors.category?.type === 'pattern' ? <span className='error'>Только буквы</span> : <></>}
                                </ListItem>
                                
                                <ButtonsList>
                                    <button className='save-btn' type='submit' disabled={(!isDirty && !isValid && !errors)} display={displayFalse} onClick={() => saveWord(item.id)}>Save</button>
                                    <button className='cancel-btn' display={displayFalse} onClick={() => cancel()}>Cancel</button>
                                </ButtonsList>
                            </InputsList>
                        </form>
                    }
                    { !isEdit &&
                        <InputsList>
                            <div className='not-edit'>{item.english}</div>
                            <div className='not-edit'>{item.russian}</div>
                            <div className='not-edit'>{item.transcription}</div>
                            <div className='not-edit'>{item.tags}</div>
                      
                            <ButtonsList>
                                <button className='edit-btn' display={displayTrue} onClick={() => editWord(item.id, item.english, item.transcription, item.russian, item.tags)}>Edit</button>
                                <button className='delete-btn' display={displayTrue} onClick={() => deleteWord(item.id)}>Delete</button>
                            </ButtonsList>
                       </InputsList>
                    }
                    </ol>
               ))}
            
    </div>
    )
}

export default List;