import './App.css';
import Header from './Header';
import NewsItem from './NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
        <Route path="/" element = {<NewsItem key="start" country="in" category="general" />}exact />
          <Route path="/general" element = {<NewsItem key="general" country="in" category="general" />}exact />
          <Route path="/business" element ={ <NewsItem key="busines" country="in" category="business" />}exact />
          <Route path="/entertainment" element = {<NewsItem key="entertainment" country="in" category="entertainment" />}exact />
          <Route path="/health" element = {<NewsItem key="health" country="in" category="health" />}exact />
          <Route path="/science" element = {<NewsItem key="science" country="in" category="science" />}exact />
          <Route path="/sports" element = {<NewsItem key="sports" country="in" category="sports" />}exact />
          <Route path="/technology" element = {<NewsItem key="technology" country="in" category="technology" />}exact />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
