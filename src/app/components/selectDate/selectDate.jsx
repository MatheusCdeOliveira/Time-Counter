import { timeContext } from '@/app/context/context';
import { useContext, useEffect } from 'react';
import Days from '../days/days';
import Months from '../months/months';
import Weeks from '../weeks/weeks';
import Years from '../years/years';
import Seconds from '../seconds/seconds';

export default function SelectDate({ timeSelected }) {
  const { date, setDate } = useContext(timeContext);

  const components = {
    segundos: <Seconds date={date} />,
    dias: <Days date={date} />,
    meses: <Months date={date} />,
    semanas: <Weeks date={date}/>,
    anos: <Years date={date}/>,
  };

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [setDate]);

  return <div>{components[timeSelected]}</div>;
}
