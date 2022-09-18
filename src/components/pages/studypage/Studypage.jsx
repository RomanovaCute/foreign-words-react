import Title from '../../pageTitle/Title';
import Slider from '../../slider/slider';
import {words} from '../../../sources/wordsStore'


function Studypage(){
    <div className="main">
        <Title title='Study'/>
        <Slider words={words} />
    </div>
}

export default Studypage;