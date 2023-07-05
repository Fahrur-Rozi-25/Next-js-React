
'use client'


import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date(+7));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-orange-600 font-extrabold py-12">
      <h1>Waktu Saat Ini</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
