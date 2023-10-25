'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import SelectDate from './components/selectDate/selectDate';

export default function Home() {
  const [timeSelected, setTimeSelected] = useState('dias');

  return (
    <main>
      <button onClick={() => setTimeSelected('segundos')}>Segundos</button>
      <button onClick={() => setTimeSelected('dias')}>Dias</button>
      <button onClick={() => setTimeSelected('semanas')}>Semanas</button>
      <button onClick={() => setTimeSelected('meses')}>Meses</button>
      <button onClick={() => setTimeSelected('anos')}>Anos</button>
      <h1>{`${
        timeSelected ? timeSelected.toUpperCase() : 'TEMPO'
      } SEM FUMAR`}</h1>
      <SelectDate timeSelected={timeSelected} />
    </main>
  );
}
