import { getMonths } from '@/app/utils/dateUtils';

export default function Meses({ date }) {
  const { months, remainingDays } = getMonths(date);

  return (
    <div>
      <h1>{`${months} Meses e ${remainingDays} Dias`}</h1>
    </div>
  );
}
