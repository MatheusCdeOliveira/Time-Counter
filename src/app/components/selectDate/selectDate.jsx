import { timeContext } from '@/app/context/context';
import { useContext, useEffect, useState } from 'react';
import Days from '../days/days';
import Months from '../months/months';
import Weeks from '../weeks/weeks';
import Years from '../years/years';
import Seconds from '../seconds/seconds';

export default function SelectDate({ timeSelected }) {
  const { time, setTime } = useContext(timeContext);

  const components = {
    segundos: <Seconds time={time} />,
    dias: <Days time={time} />,
    meses: <Months time={time} />,
    semanas: <Weeks time={time}/>,
    anos: <Years time={time}/>,
  };

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [setTime]);

  return <div>{components[timeSelected]}</div>;
}
