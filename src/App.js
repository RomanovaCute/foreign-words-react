import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles/App.css';
import Homepage from "./components/pages/homepage/Home";
import Studypage from "./components/pages/studypage/Study";
import Dictionarypage from "./components/pages/dictionarypage/Dictionary";
import NotFoundpage from "./components/pages/notfoundpage/NotFound";
import Layout from "./components/layout/Layout";



function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage />} />
            <Route path="study" element={<Studypage/>}/>
            <Route path="dictionary" element={<Dictionarypage/>} />
            <Route path="*" element={<NotFoundpage/>} />
          </Route>
        </Routes>
    </div>
    </Router>
  );

}

export default App;
