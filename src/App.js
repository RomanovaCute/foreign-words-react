import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";
import './styles/App.css';
import Nav from './components/navigation/Nav'
import Footer from './components/footer/Footer'
import Homepage from "./components/pages/homepage/Homepage";
import Studypage from "./components/pages/studypage/Studypage";
import Dictionarypage from "./components/pages/dictionarypage/Dictionary";



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/study" element={<Studypage />}/>
          <Route path="/dictionary" element={<Dictionarypage/>} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  );

}

export default App;
