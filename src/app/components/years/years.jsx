import { getYears } from '@/app/utils/dateUtils';

export default function Years({ time }) {
  const { years } = getYears(time);

  return (
    <div>
      <h1>{`${years} ANOS `}</h1>
    </div>
  );
}
