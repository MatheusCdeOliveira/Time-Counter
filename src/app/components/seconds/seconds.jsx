import { getSeconds } from '@/app/utils/dateUtils';

export default function Seconds({ time }) {
  const { seconds } = getSeconds(time);

  return (
    <div>
      <h1>{`${seconds} SEGUNDOS `}</h1>
    </div>
  );
}
