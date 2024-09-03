import { FC } from "react";
import { useUpdateReservation } from "../../hooks/useUpdateReservation";
import { ReservationType } from "../../types/reservation.type";

interface ReservationActionsProps {
  reservation: ReservationType;
}

export const ReservationActions: FC<ReservationActionsProps> = ({
  reservation,
}) => {
  const mutation = useUpdateReservation();

  const handleUpdate = (field: "numAdults" | "numChildren", value: number) => {
    const updatedData = { [field]: value };
    mutation.mutate({ reservationId: reservation.id, updatedData });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <span>Dorośli:</span>
        <button
          onClick={() => handleUpdate("numAdults", reservation.numAdults - 1)}
          className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          disabled={mutation.isLoading || reservation.numAdults <= 0}
        >
          -
        </button>
        <span>{reservation.numAdults}</span>
        <button
          onClick={() => handleUpdate("numAdults", reservation.numAdults + 1)}
          className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          disabled={mutation.isLoading}
        >
          +
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <span>Dzieci:</span>
        <button
          onClick={() =>
            handleUpdate("numChildren", reservation.numChildren - 1)
          }
          className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          disabled={mutation.isLoading || reservation.numChildren <= 0}
        >
          -
        </button>
        <span>{reservation.numChildren}</span>
        <button
          onClick={() =>
            handleUpdate("numChildren", reservation.numChildren + 1)
          }
          className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          disabled={mutation.isLoading}
        >
          +
        </button>
      </div>

      <button
        onClick={() => console.log(`Anuluj rezerwację ${reservation.id}`)}
        className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        disabled={mutation.isLoading}
      >
        Anuluj
      </button>
    </div>
  );
};
