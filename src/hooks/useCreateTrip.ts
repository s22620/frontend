import { useMutation, useQueryClient } from "react-query";
import { TripType } from "../types/trip.type";
import { createTrip } from "../api/trips";

// Hook do tworzenia nowej wycieczki
export const useCreateTrip = () => {
  const queryClient = useQueryClient(); // Do odświeżenia danych po utworzeniu

  return useMutation<TripType, Error, TripType>(createTrip, {
    onSuccess: () => {
      // Po pomyślnym utworzeniu, możemy odświeżyć listę wycieczek
      queryClient.invalidateQueries(["trips"]);
    },
    onError: (error) => {
      console.error("Error creating trip:", error);
      // Obsługa błędów
    },
  });
};
