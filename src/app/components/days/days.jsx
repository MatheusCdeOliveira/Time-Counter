import { getDays } from '@/app/utils/dateUtils';

export default function Days({ time }) {
  const { totalDays, actualHours, actualMinutes, actualSeconds } = getDays(time);

  return (
    <div>
      <h1>{`${totalDays} DIAS `}</h1>
      <h2>{`${actualHours}:${actualMinutes}:${actualSeconds}`}</h2>
    </div>
  );
}
