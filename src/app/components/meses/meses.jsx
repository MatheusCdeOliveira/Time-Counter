import { getMonths } from '@/app/utils/dateUtils';

export default function Meses({ time }) {
  const { totalMonths, remainingDays } = getMonths(time);

  return (
    <div>
      <h1>{`${totalMonths} MESES e ${remainingDays} DIAS`}</h1>
    </div>
  );
}
