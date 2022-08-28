import './styles/App.css';
import Nav from './components/navigation/Nav'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'
import Title from './components/pageTitle/Title'
import HeaderList from './components/list/header/ListHeader';
import List from './components/list/main/List';
import ProgressLine from './components/progressBar/Progress';


const words = [
  {
    id: 1,
    tag: 'color',
    word: "turquoise",
    transcription: "[ ˈtɜːkwɔɪz ]",
    translate: "бирюзовый",
    engMeaning: "a color of a bluish-green semi-precious stone that is often used in jewellery",
    ruMeaning: "цвет голубовато-зеленого полудрагоценного камня, который часто используется в ювелирных изделиях",
    img: './images/turquoise.jpg'
  },
  {
    id: 2,
    tag: 'vegitables',
    word: "olive",
    transcription: "[ ˈɒlɪv ]",
    translate: "оливка",
    engMeaning: "a small bitter green or black fruit that is eaten or used to produce oil, or a Mediterranean tree on which this fruit grows:",
    ruMeaning: "небольшой горький зеленый или черный плод, который едят или используют для получения масла, или средиземноморское дерево, на котором растет этот плод",
    img: './images/olive.jpg'
  },
  {
    id: 3,
    tag: 'trees',
    word: "bay",
    transcription: "[bei]",
    translate: "лавр",
    engMeaning: "a small evergreen tree (= one that never loses its leaves) that has leaves that are used to add flavour to food",
    ruMeaning: "небольшое вечнозеленое дерево (= то, которое никогда не теряет своих листьев), листья которого используются для добавления аромата в пищу",
    img: './images/bay.jpeg'
  },
  {
    id: 4,
    tag: 'trees',
    word: "larch",
    transcription: "[la:t∫]",
    translate: "лиственница",
    engMeaning: "a tall tree that grows in cold northern countries and has leaves shaped like needles that it loses in winter",
    ruMeaning: "высокое дерево, которое растет в холодных северных странах и имеет листья в форме иголок, которые оно теряет на зиму",
    img: './images/larch.jpg'
  },
  {
    id: 5,
    tag: 'body',
    word: "abdomen",
    transcription: "[ ˈæbdəmən ]",
    translate: "живот",
    engMeaning: "the part of the body that contains stomach, bowels, and other organs in a person or animal",
    ruMeaning: "часть тела, содержащая желудок, кишечник и другие органы у человека или животного",
    img: './images/abdomen.jpg'
  },
  {
    id: 6,
    tag: 'body',
    word: "ankle",
    transcription: "[ ˈæŋkl̩ ]",
    translate: "голеностоп",
    engMeaning: "the joint connecting the foot to the leg, or the thin part of the leg just above the foot",
    ruMeaning: "сустав, соединяющий стопу с ногой, или тонкая часть ноги чуть выше стопы",
    img: './images/ankle.jpg'
  }
]


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className='main'>
        <Title title='Study'>
          <ProgressLine></ProgressLine>
        </Title>
        <div className='cards-wrapper'>
          {
        words.map(item => 
          <Card 
            key={item.id}
            tag={item.tag}
            word={item.word}
            transcript={item.transcription}
            img={item.img}
            translate={item.translate}
            engMeaning={item.engMeaning}
            ruMeaning={item.ruMeaning}
          > 
          </Card>
        )
      }
        </div>
        <div className='dictionary'>
          <HeaderList></HeaderList>
          {
            words.map(item =>
              <List
                tag={item.tag}
                word={item.word}
                transcript={item.transcription}
                translate={item.translate}
                isSelected={item.isSelected}>
              </List>
            )
          }
        </div>
      </div>
      <Footer></Footer>
    </div>
  );

}

export default App;
