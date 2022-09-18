import Slider from '../../slider/slider';
import {words} from '../../../sources/wordsStore'
import Title from '../../pageTitle/Title';


function Studypage(){
    return(
        <div className='study-wrapper'>
            <Title title="Study"/>
            <Slider words={words}/>
        </div>
    )  
}

export default Studypage;