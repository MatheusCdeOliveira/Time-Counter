'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const begin = new Date("April 21, 2023 12:00:00");

  const presentDay = time;
  const oneDay = 1000 * 60 * 60 * 24;
  const difference = presentDay - begin;
  const currentHours = presentDay.getHours();
  const currentMinutes = presentDay.getMinutes();
  const currentSec = presentDay.getSeconds().toString().padStart(2, '0');
  const totalDays = Math.floor(difference / oneDay);

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    setIsClient(true);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main>
     <h1>DIAS SEM FUMAR</h1>
     <h1>{`${totalDays} DIAS `}</h1>
     <h2>{`${currentHours}:${currentMinutes}:${currentSec}`}</h2>
    </main>
  )
}
