import { useContext } from 'react';
import { useInput } from '../../../hooks/useValidation'
import { WordsContext } from '../../../Context'
import { Button, InputGroup, Form } from 'react-bootstrap';

function NewWord() {
    const {setList, list} = useContext(WordsContext);

    const english = useInput('', {isEmpty: true, isNumber: false, isRU: false});
    const transcription = useInput('', {isEmpty: true, isNumber: false, isRU: false});
    const russian = useInput('', {isEmpty: true, isNumber: false});
    const tags = useInput('', {isEmpty: true});
    
    const addWord = async () => {
        const newWord = {
          english: english.value,
          transcription: transcription.value,
          russian: russian.value,
          tags: tags.value
        }
        try {
          const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(newWord)
          });
          if (res.ok) {
            list.push(newWord);
            setList([...list]);
          }
        } catch(e) {
          alert(`Ошибка соединения с сервером. ${e}`);
        } finally {
          english.setValue('');
          transcription.setValue('');    
          russian.setValue('');
          tags.setValue(''); 
        } 
      }
    
      return(
        <Form>
            <InputGroup>
                <label>
                    <input 
                         placeholder="Введите новое слово" 
                         autoFocus
                         value={english.value}
                         onChange={(e) => english.onChange(e)}
                         onBlur={(e) => english.onBlur(e)}
                         name='english'
                    />
                </label>
                <label>
                    <input
                        placeholder="Введите транскрипцию"
                        value={transcription.value}
                        onChange={(e) => transcription.onChange(e)}
                        onBlur={(e) => transcription.onBlur(e)}
                        name='transcription'
                    />
                </label>
                <label>
                    <input
                        placeholder="Введите перевод"
                        value={russian.value}
                        onChange={(e) => russian.onChange(e)}
                        onBlur={(e) => russian.onBlur(e)}
                        name='russian'
                    />
                </label>
            </InputGroup>
            <Button variant="warning" onClick={() => addWord()} disabled = {!english.inputValid || !transcription.inputValid || !russian.inputValid || !tags.inputValid}>Add new word</Button>
        </Form>
      )
}

export default NewWord;