import { useState, useEffect } from 'react'
import HeaderList from '../../list/header/ListHeader'
import List from '../../list/main/List'
import Title from '../../pageTitle/Title'
import { TitleBox } from './styles'
import Preloder from '../../preloader/Preloader'

function Dictionarypage(){
  const [isLoading, setLoading] = useState(false);
  const [words, setWords] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://6329d7e3d2c97d8c527202e1.mockapi.io/words`)
        .then(res => res.json())
        .then((json) => {
            setWords(json)
        })
        .catch((error) => {
            console.log(error);
            alert('Ошибка. Данные не получены')
        })
        .finally(() => {
          setLoading(false);
        })
        }, [])


    return(
      <>
        { isLoading &&
          <Preloder />
        }

        { !isLoading &&
          <div className="dictionary-wrapper">
            <TitleBox>
              <Title title="Dictionary" />
            </TitleBox>
            <HeaderList/>
            <div className='list'>
              {
              words.map(item =>
                <List
                key={item.id}
                  tag={item.tag}
                  word={item.word}
                  transcript={item.transcription}
                  translate={item.translate}
                  isSelected={item.isSelected} 
                />
              )
            }
            </div>
          </div>
        }
      </>
    )
}

export default Dictionarypage;