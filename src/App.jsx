import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {v4 as uuid} from 'uuid';
import MemoryCard from './components/MemoryCard';
import LeaderBoard from './components/Leaderboard';
import Header from './components/Header';

const characterNames = ["Naruto Uzumaki", "Obito Uchiha", "Sasuke Uchiha", "Kakashi Hatake", "Itachi Uchiha", "Gaara", "Sakura Haruno", "Tsunade", "Black Zetsu", "Orochimaru", "Minato Namikaze", "Boruto Uzumaki"];
function App() {
  const [characters, setCharacters] = useState(characterNames.map(function(x){
    return {name: x, id: uuid()}
  }));
  const [score, setScore] = useState({current: 0, high: 0});
  const [chosenCharacters, setChosenCharacters] = useState([]);

  const handleClick = function(event, id){
    event.preventDefault();
    const temp = CopyArray(characters);
    shuffleArray(temp);
    setCharacters(temp);
    if(!chosenCharacters.includes(id)){
      const currScore = score.current + 1;
      const currHigh = currScore > score.high ? currScore : score.high;
      setScore({current: currScore, high: currHigh});
      setChosenCharacters([...chosenCharacters, id]);
    }
    else{
      setScore({current: 0, high: score.high});
      setChosenCharacters([]);
    }
    console.log(chosenCharacters);
  }
  return (
    <>
    <Header current = {score.current} highScore={score.high}/>
    <div className = "flex-container">
    <div className = "cards-container">
    {characters.map(x => {
      return <MemoryCard key = {x.id} query = {x.name} onClick = {(e) => handleClick(e, x.id)}/>
    })}
    </div>
    </div>
    </>
  )
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function CopyArray(array){
  let result = [];
  for(let i = 0; i<array.length; i++){
    result.push(array[i]);
  }
  return result;
}
export default App
