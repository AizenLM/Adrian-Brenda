import React, { useState, useEffect } from "react";

const CountdownTimer = ({className}) => {
  const targetDate = new Date("2025-01-25T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <div className={`${className} container-countdowntimer`}>
      <h2>Cuenta regresiva para este gran evento</h2>
      <div style={{ fontSize: "2rem", margin: "20px 0" }}>
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && (
          <p style={{ color: "red", fontSize: "1.5rem" }}>¡El evento ha comenzado!</p>
        )}
    </div>
  );
};

export default CountdownTimer;
