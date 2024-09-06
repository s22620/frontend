import { useMutation, useQueryClient } from "react-query";
import { deleteTrip } from "../api/trips"; // Importujemy funkcję API

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (tripId: string) => {
      await deleteTrip(tripId); // Używamy funkcji API
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("trips"); // Odświeżamy cache po sukcesie
      },
    }
  );
};
