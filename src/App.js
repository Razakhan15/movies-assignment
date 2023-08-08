import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import MovieInfo from './components/MovieInfo';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route eexact path="/" element={<MovieInfo/>}></Route>
          <Route eexact path="/more" element={<Card/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
