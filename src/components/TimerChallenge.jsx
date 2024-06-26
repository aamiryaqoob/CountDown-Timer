import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    function handleStartTime() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true)
    }
    function handleStopTime() {
        clearTimeout(timer.current);
    }

    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? handleStopTime : handleStartTime} ref={timer}>
                {timerStarted ? "Stop" : "Start"} Challenge
            </button>
        </p>
        <p className="">
            {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
    </section>
}