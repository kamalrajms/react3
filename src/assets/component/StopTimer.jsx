import React, { useEffect, useState } from "react";

export default function StopTimer() {
  const [sec, setSec] = useState(0);
  const [time, setTime] = useState(false);
  useEffect(() => {
    if (time) {
      const interval = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const start = () => {
    setTime(true);
  };
  const stop = () => {
    setTime(false);
  };
  const reset = () => {
    setTime(false);
    setSec(0);
  };
  return (
    <div>
      <h2>time :{sec}</h2>
      <button onClick={stop}>Stop</button>
      <button onClick={start}>Start</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
