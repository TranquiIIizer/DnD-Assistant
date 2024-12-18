import './App.css'
import ClickCounterButton from './Components/ClickCounterButton/ClickCounterButton'
import ClickCounterIndividualButton from './Components/ClickCounterButton/ClickCounterIndividualButton';
import StartButton from './Components/StartButton/StartButton'
import CreatorCarousel from './Components/CreatorCarousel/CreatorCarousel';
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
      <CreatorCarousel></CreatorCarousel>
    </>
  )
}

export default App
