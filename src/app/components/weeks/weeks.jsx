import { getWeeks} from '@/app/utils/dateUtils';

export default function Weeks({ time }) {
  const { weeks } = getWeeks(time);

  return (
    <div>
      <h1>{`${weeks} Semanas `}</h1>
    </div>
  );
}
