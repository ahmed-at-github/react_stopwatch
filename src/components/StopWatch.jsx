import { useEffect } from "react";
import { useState } from "react"
import ControlButtons from "./ControlButtons";
import Timer from "./Timer";
import "../App.css";


export default function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        let interval = null;

        if(isActive && !isPaused) { //setInterval will run if the watch is active & not paused 
            interval = setInterval(() => {
                setTime((time) => time+10);
            }, 10); 
        } else {
            clearInterval(interval);
        }  
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]); 

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false); 
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

  return (
    <div className="stop-watch">
        <Timer
            time={time}
        />
        <ControlButtons
            active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
        />
    </div>
  ); 
}
