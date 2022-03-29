
import './App.css';
import {useState, useEffect } from 'react';


function App() {

  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  let nf = Intl.NumberFormat()

  useEffect(() => {

    let interval = null;
    if(timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }else{
      clearInterval(interval)
    }
    
    return () => clearInterval(interval)
  }, [timerOn])

  let playPause = () => {

    if(timerOn === false){
      setTimerOn(true)
    }
    else{
      setTimerOn(false)
    }
  }

  return (
    <>
      <div className='header'>
        <h1 className='title'>Metronome</h1>
      </div>

      <div className='main'>

        <h1 className='time'>{nf.format(time)}</h1>
        <button className='startButton' onClick={playPause}>Start Tempo</button>

      </div>
    
    </>
  );

}
export default App;
