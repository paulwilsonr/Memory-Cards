import './App.css';
import CardContainer from './Components/CardContainer';
import {useState} from 'react';
import Score from './Components/Score';

function App() {
  const [score, setScore] = useState(0);
  const incrementScore = () => {
    setScore(score +1);
  }

  return (
   <div>
    <Score score={score} id='score' />
    <CardContainer addScore={incrementScore} score={score}/>
   </div>
  );
}

export default App;
