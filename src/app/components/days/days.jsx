import { getDays } from '@/app/utils/dateUtils';

export default function Days({ time }) {
  const { totalDays, hours, minutes, seconds } = getDays(time);

  return (
    <div>
      <h1>{`${totalDays} DIAS `}</h1>
      <h2>{`${hours}:${minutes}:${seconds}`}</h2>
    </div>
  );
}
