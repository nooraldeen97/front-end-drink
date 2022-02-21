import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Favorite />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
