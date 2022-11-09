import { useState, useEffect } from 'react'
import HeaderList from '../../list/header/ListHeader'
import List from '../../list/main/List'
import Title from '../../pageTitle/Title'
import { TitleBox } from './styles'
import Preloder from '../../preloader/Preloader'
import { useContext } from 'react'
import { WordsContext } from '../../../Context'
import  NewWord  from '../../list/newWord/AddWord'

function Dictionarypage(){
  const [isLoading, setLoading] = useState(false);
  const { list } = useContext(WordsContext)

  useEffect(() => {
    <List />
    }, [list]);

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
              <NewWord />
              <List />
            </div>
          </div>
        }
      </>
    )
}

export default Dictionarypage;