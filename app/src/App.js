import './styles/App.css';
import Nav from './components/navigation/Nav'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'
import Title from './components/pageTitle/Title'
import HeaderList from './components/list/header/ListHeader';
import List from './components/list/main/List';
import ProgressLine from './components/progressBar/Progress';
import Slider from './components/slider/Slider';
import {words} from './components/wordsStore'



function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='main'>
        <Title title='Study'>
          <ProgressLine/>
        </Title>
        <Slider words={words} />
        <div className='dictionary'>
          <HeaderList></HeaderList>
          {
            words.map(item =>
              <List
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
      <Footer/>
    </div>
  );

}

export default App;
