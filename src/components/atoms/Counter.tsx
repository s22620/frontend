import { FC } from "react";

interface CounterProps {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  canDecrease: boolean;
}

export const Counter: FC<CounterProps> = ({
  label,
  value,
  onIncrease,
  onDecrease,
  canDecrease,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <span>{label}:</span>
      <button
        onClick={onDecrease}
        className={`px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600 ${
          !canDecrease
            ? "bg-opacity-50 cursor-not-allowed hover:bg-gray-500 hover:bg-opacity-50"
            : ""
        }`}
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
  );
};
