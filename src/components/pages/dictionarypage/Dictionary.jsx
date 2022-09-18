import HeaderList from '../../list/header/ListHeader'
import List from '../../list/main/List'
import Title from '../../pageTitle/Title'
import { TitleBox } from './styles'
import {words} from '../../../sources/wordsStore'

function Dictionarypage(){
    return(
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
    )
}

export default Dictionarypage;