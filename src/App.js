
import './App.css';
import {useState, useEffect } from 'react';


function App() {

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [sound, toggleSound] = useState(false);
  let nf = Intl.NumberFormat();
  const click = new Audio('click.wav');
  let tempo = null;

  useEffect(() => {

    let interval = null;
    if(timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10)
    }else{
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [timerOn])

  let startStop = () => {

    if(timerOn === false){
      setTimerOn(true);
    }
    else{
      setTimerOn(false);
    }
  }

  useEffect(() => {
    let interval = null;
    if(sound){
      interval = setInterval(() => {
        click.play();
      }, time)
    }else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [sound])

let playPause = () => {
  if(sound === false){
    toggleSound(true);
  }
  else{
    toggleSound(false);
  }
}

  return (
    <>
      <div className='header'>
        <h1 className='title'>Metronome</h1>
      </div>

      <div className='main'>

        <h1 className='time'>{nf.format(time)}</h1>
        <button className='setButton' onClick={startStop}>Set Tempo</button>
        <button className='startButton' onClick={playPause} >Start Metronome</button>

      </div>
    
    </>
  );

}
export default App;
