import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (time === 0 && isRunning) {
      alert("O tempo acabou!");
      setIsRunning(false);
    }
  }, [isRunning, time]);

  return (
    <div>
      <h2>Timer com Contagem Regressiva</h2>
      <input
        type="number"
        placeholder="Defina o tempo (segundos)"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        disabled={isRunning}
      />
      <div>
        <button onClick={() => setIsRunning(true)}>Iniciar</button>
        <button onClick={() => setIsRunning(false)}>Pausar</button>
        <button onClick={() => setTime(0)}>Reiniciar</button>
      </div>
      <p>Tempo restante: {time}s</p>
    </div>
  );
}

export default CountdownTimer;
