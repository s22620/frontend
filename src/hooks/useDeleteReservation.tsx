import { useMutation, useQueryClient } from "react-query";
import { deleteReservation } from "../api/reservations";

export const useDeleteReservation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteReservation, {
    onSuccess: () => {
      // Po usunięciu rezerwacji, odśwież listę rezerwacji
      queryClient.invalidateQueries(["reservations"]);
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania rezerwacji:", error);
    },
  });
};
