import HeaderList from '../../list/header/ListHeader'
import List from '../../list/main/List'
import {words} from '../../../sources/wordsStore'

function Dictionarypage(){
    return(
        <div className="dictionary-wrapper">
            <HeaderList/>
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
    )
}

export default Dictionarypage;