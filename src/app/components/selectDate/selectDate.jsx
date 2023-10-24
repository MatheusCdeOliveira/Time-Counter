import { timeContext } from '@/app/context/context';
import { useContext, useEffect, useState } from 'react';
import Days from '../days/days';
import Meses from '../meses/meses';

export default function SelectDate({ timeSelected }) {
  const { time, setTime } = useContext(timeContext);

  const components = {
    dias: <Days time={time} />,
    meses: <Meses time={time} />,
  };

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [setTime]);

  return <div>{components[timeSelected]}</div>;
}
