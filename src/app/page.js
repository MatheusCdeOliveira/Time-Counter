'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Dias from './components/selectDate/selectDate';
import { useState } from 'react';
import SelectDate from './components/selectDate/selectDate';

export default function Home() {
  const [timeSelected, setTimeSelected] = useState();

  return (
    <main>
      <button onClick={() => setTimeSelected('dias')}>Dias</button>
      <button onClick={() => setTimeSelected('meses')}>Meses</button>
      <h1>{`${
        timeSelected ? timeSelected.toUpperCase() : 'TEMPO'
      } SEM FUMAR`}</h1>
      <SelectDate timeSelected={timeSelected} />
    </main>
  );
}
