
import './App.css';
import { useStopwatch } from 'react-timer-hook';

function App() {

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  function timer(){
    if(!isRunning){
      {start};
    }
    else{
      {pause};
    }

  }
  







  return (
    <>
      <div className='header'>
        <h1 className='title'>Metronome</h1>
      </div>

      <div className='main'>

        <h1>minutes:seconds</h1>

        <button onClick={timer()} >Start Tempo</button>



      </div>
    
    
    </>
  );

}

export default App;
