import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/home';
import Player from "./components/player/player"
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/song/:trackId" element={<Player/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
