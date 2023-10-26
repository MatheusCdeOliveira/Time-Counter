import { getWeeks} from '@/app/utils/dateUtils';

export default function Weeks({ date }) {
  const { weeks } = getWeeks(date);

  return (
    <div>
      <h1>{`${weeks} Semanas `}</h1>
    </div>
  );
}
