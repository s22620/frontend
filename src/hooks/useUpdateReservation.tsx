import { useMutation, useQueryClient } from "react-query";
import { ReservationType } from "../types/reservation.type";
import { updateReservation } from "../api/reservations";

export const useUpdateReservation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: { reservationId: string; updatedData: Partial<ReservationType> }) =>
      updateReservation(data.reservationId, data.updatedData),
    {
      onSuccess: () => {
        // Po aktualizacji rezerwacji, odśwież listę rezerwacji
        queryClient.invalidateQueries(["reservations"]);
      },
      onError: (error) => {
        console.error("Błąd podczas aktualizacji rezerwacji:", error);
      },
    }
  );
};
