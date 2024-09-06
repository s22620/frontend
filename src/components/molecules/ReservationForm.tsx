import { FC, useState } from "react";
import { Button } from "../ui/button";

interface ReservationFormProps {
  onSubmit: (numAdults: number, numChildren: number) => void;
  isLoading?: boolean;
}

export const ReservationForm: FC<ReservationFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const handleSubmit = () => {
    onSubmit(numAdults, numChildren);
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-center gap-4">
        {/* Wyrównanie etykiet */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-lg font-semibold text-gray-700">
            Dorośli:
          </label>
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setNumAdults((prev) => Math.max(1, prev - 1))}
              className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              disabled={isLoading}
            >
              -
            </button>
            <span>{numAdults}</span>
            <button
              onClick={() => setNumAdults((prev) => prev + 1)}
              className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              disabled={isLoading}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="w-24 text-lg font-semibold text-gray-700">
            Dzieci:
          </label>
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setNumChildren((prev) => Math.max(0, prev - 1))}
              className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              disabled={isLoading}
            >
              -
            </button>
            <span>{numChildren}</span>
            <button
              onClick={() => setNumChildren((prev) => prev + 1)}
              className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              disabled={isLoading}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        className="px-4 py-2 mt-6"
        disabled={isLoading}
      >
        {isLoading ? "Przetwarzanie..." : "Zarezerwuj i zapłać"}
      </Button>
    </div>
  );
};
