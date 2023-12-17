import { useState, useEffect, useRef } from 'react';

const StopWatch = () => {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);
    const intervalRef = useRef<any>(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 100)
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondPassed = 0;

    if (startTime != null && now != null) {
        secondPassed = (now - startTime) / 1000;
    }

    return (
        <div className='mt-5'>
            <h1 className='text-fuchsia-700'>
                Stop Watch
            </h1>
            <h3>Time Passed: {secondPassed.toFixed(3)}</h3>
            <>
                <button className={`max-w-fit mt-1 p-1 border-2 border-blue-200 rounded-sm mr-5`} onClick={handleStart}>
                    Start
                </button>
                <button className={`max-w-fit mt-1 p-1 border-2 border-blue-200 rounded-sm`} onClick={handleStop}>
                    Stop
                </button>
            </>
        </div>
    )
}

export default StopWatch;