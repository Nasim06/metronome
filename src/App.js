
import './App.css';
import {useState, useEffect } from 'react';



function App() {

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [sound, toggleSound] = useState(false);
  let nf = Intl.NumberFormat();
  let tempo = undefined;

  useEffect(() => {

    let interval = null;
    if(timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 100)
    }else{
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [timerOn])

  useEffect(() => {
    let interval = null;
    if(sound){
      interval = setInterval(() => {
        playSound();
      }, tempo)
    }else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [sound])

  const playSound = () =>{
    let click = document.getElementById("click");
    click.play();
  }

  const startStop = () => {

    if(timerOn === false){
      setTimerOn(true);
    }
    else{
      setTimerOn(false);
      tempo = time;
    }
  }

  const playPause = () => {
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
        <audio src="click.wav" id="click"></audio>

      </div>
    
    </>
  );

}
export default App;
