import { getYears } from '@/app/utils/dateUtils';

export default function Years({ date }) {
  const { years } = getYears(date);

  return (
    <div>
      <h1>{`${years} ${years < 1 ? 'Ano' : 'Anos'}`}</h1>
    </div>
  );
}
