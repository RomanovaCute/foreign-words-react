import { useState, useEffect } from 'react'
import HeaderList from '../../list/header/ListHeader'
import List from '../../list/main/List'
import Title from '../../pageTitle/Title'
import { TitleBox } from './styles'
import Preloder from '../../preloader/Preloader'
import { Storage } from '../../../store/wordsStore';
import { observer } from 'mobx-react-lite';

const Dictionarypage = observer(() => {
  const [isLoading, setLoading] = useState(false);

  const [Ctrl] = useState(new Storage())

  useEffect(() => {
    Ctrl.getWords();
  }, []);

  useEffect(() => {
    <List />
    }, [Ctrl.list]);


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
              <List ctrl = {Ctrl}/>
            </div>
          </div>
        }
      </>
    )
})

export default Dictionarypage;