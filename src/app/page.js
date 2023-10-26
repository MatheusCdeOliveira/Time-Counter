'use client';
import { useState } from 'react';
import SelectDate from './components/selectDate/selectDate';
import './styles/home.css';

export default function Home() {
  const [timeSelected, setTimeSelected] = useState('dias');

  return (
    <main className='container'>
    <div className='buttons-select'>
      <button className='btn' onClick={() => setTimeSelected('segundos')}>Segundos</button>
      <button className='btn' onClick={() => setTimeSelected('dias')}>Dias</button>
      <button className='btn' onClick={() => setTimeSelected('semanas')}>Semanas</button>
      <button className='btn' onClick={() => setTimeSelected('meses')}>Meses</button>
      <button className='btn' onClick={() => setTimeSelected('anos')}>Anos</button>
    </div>
      <div className='counter'>
      <h1 className='heading'>{`${timeSelected.toUpperCase()} SEM FUMAR`}</h1>
      <SelectDate timeSelected={timeSelected} />
    </div>
    </main>
  );
}
