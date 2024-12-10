import './App.css'
import ClickCounterButton from './ClickCounterButton/ClickCounterButton'
import ClickCounterIndividualButton from './ClickCounterButton/ClickCounterIndividualButton';
import StartButton from './StartButton/StartButton'
import { useState } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

    function handleClick(){
        setClickCount(clickCount + 1);
    }
  
  return (
    <>
      <h1>Welcome to D&D assistant</h1>
      <h2>We can help you create your D&D character and embark on a new adventure.</h2>
      <StartButton />
      <ClickCounterButton count={clickCount} onClick={handleClick}/>
      <ClickCounterButton count={clickCount} onClick={handleClick}/>
      <ClickCounterIndividualButton />
    </>
  )
}

export default App
