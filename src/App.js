import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles/App.css';
import Nav from './components/navigation/Nav'
import Footer from './components/footer/Footer'
import Homepage from "./components/pages/homepage/Home";
import Studypage from "./components/pages/studypage/Study";
import Dictionarypage from "./components/pages/dictionarypage/Dictionary";
import NotFoundpage from "./components/pages/notfoundpage/NotFound";



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/study" element={<Studypage/>}/>
          <Route path="/dictionary" element={<Dictionarypage/>} />
          <Route path="*" element={<NotFoundpage/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );

}

export default App;
