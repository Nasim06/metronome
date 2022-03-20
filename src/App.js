
import './App.css';
import {useState } from 'react';


function App() {

  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  let startTime

  function start(){
      if(timerOn === true){
          setTime(0)
      }
      setTimerOn(true)
      startTime = Date.now()
      while(timerOn === false){
          setTime(Date.now()-startTime)
      }
  }

  function stop(){
      setTimerOn(false)
  }

  return (
    <>
      <div className='header'>
        <h1 className='title'>Metronome</h1>
      </div>

      <div className='main'>

        <h1>{time}</h1>
        <button className='startButton' onClick={start}>Start Tempo</button>
        <button className='stopButton' onClick={stop}>Stop Tempo</button>



      </div>
    
    
    </>
  );

}

export default App;
