import { FC } from "react";

interface CounterProps {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  canDecrease?: boolean;
}

export const ReservationCounter: FC<CounterProps> = ({
  label,
  value,
  onIncrease,
  onDecrease,
  canDecrease = true,
}) => (
  <div>
    <label className="text-lg font-semibold text-gray-700">{label}:</label>
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrease}
        className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        disabled={!canDecrease}
      >
        -
      </button>
      <span>{value}</span>
      <button
        onClick={onIncrease}
        className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
      >
        +
      </button>
    </div>
  </div>
);
