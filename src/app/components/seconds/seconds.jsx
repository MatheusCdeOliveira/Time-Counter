import { getSeconds } from '@/app/utils/dateUtils';

export default function Seconds({ date }) {
  const { seconds } = getSeconds(date);

  return (
    <div>
      <h1>{`${seconds} Segundos `}</h1>
    </div>
  );
}
