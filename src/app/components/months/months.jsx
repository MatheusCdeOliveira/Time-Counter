import { getMonths } from '@/app/utils/dateUtils';

export default function Meses({ time }) {
  const { months, remainingDays } = getMonths(time);

  return (
    <div>
      <h1>{`${months} MESES e ${remainingDays} DIAS`}</h1>
    </div>
  );
}
