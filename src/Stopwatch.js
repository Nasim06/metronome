import React, { useEffect, useState } from 'react'

function Stopwatch(){

    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    useEffect (()=> {
        if(timerOn === true){
            setTime(time + 1)
        }
    })
    
  



    function Start (){
        setTimerOn(true)
    }

    function Stop(){
        setTimerOn(false)
    }







    
}