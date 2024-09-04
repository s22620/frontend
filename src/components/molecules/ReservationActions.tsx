import { FC } from "react";
import { useUpdateReservation } from "../../hooks/useUpdateReservation";
import { useDeleteReservation } from "../../hooks/useDeleteReservation";
import { ReservationType } from "../../types/reservation.type";
import { Counter } from "../atoms/Counter";
import { DeleteButton } from "../atoms/DeleteButton";

interface ReservationActionsProps {
  reservation: ReservationType;
}

export const ReservationActions: FC<ReservationActionsProps> = ({
  reservation,
}) => {
  const updateMutation = useUpdateReservation();
  const deleteMutation = useDeleteReservation();

  const handleUpdate = (field: "numAdults" | "numChildren", value: number) => {
    const updatedData = { [field]: value };
    updateMutation.mutate({ reservationId: reservation.id, updatedData });
  };

  const totalPeople = reservation.numAdults + reservation.numChildren;

  const canDecreaseAdults = reservation.numAdults > 0 && totalPeople > 1;
  const canDecreaseChildren = reservation.numChildren > 0 && totalPeople > 1;

  const handleDelete = () => {
    if (window.confirm("Czy na pewno chcesz anulować tę rezerwację?")) {
      deleteMutation.mutate(reservation.id);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 space-y-4 md:flex-row md:gap-10">
      <Counter
        label="Dorośli"
        value={reservation.numAdults}
        onIncrease={() => handleUpdate("numAdults", reservation.numAdults + 1)}
        onDecrease={() => handleUpdate("numAdults", reservation.numAdults - 1)}
        canDecrease={canDecreaseAdults}
      />
      <Counter
        label="Dzieci"
        value={reservation.numChildren}
        onIncrease={() =>
          handleUpdate("numChildren", reservation.numChildren + 1)
        }
        onDecrease={() =>
          handleUpdate("numChildren", reservation.numChildren - 1)
        }
        canDecrease={canDecreaseChildren}
      />
      <DeleteButton
        onDelete={handleDelete}
        isLoading={deleteMutation.isLoading}
      />
    </div>
  );
};
