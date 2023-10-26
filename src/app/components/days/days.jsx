import { getDays } from '@/app/utils/dateUtils';

export default function Days({ date }) {
  const { totalDays, actualHours, actualMinutes, actualSeconds } = getDays(date);

  return (
    <div>
      <h1>{`${totalDays} Dias `}</h1>
      <h2>{`${actualHours}:${actualMinutes}:${actualSeconds}`}</h2>
    </div>
  );
}
