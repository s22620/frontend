import { useMutation, useQueryClient } from "react-query";
import { TripType } from "../types/trip.type";
import { updateTrip } from "../api/trips";

// Hook do aktualizacji wycieczki
export const useUpdateTrip = () => {
  const queryClient = useQueryClient(); // Używane do odświeżenia listy po aktualizacji

  // Funkcja do mutacji (aktualizacji wycieczki)
  return useMutation<TripType, Error, TripType>(
    (tripData: TripType) => updateTrip(tripData), // Przekazujemy tripData do funkcji API
    {
      onSuccess: () => {
        // Po pomyślnej aktualizacji odśwież listę wycieczek (można też dodać inny cache, jeśli używasz)
        queryClient.invalidateQueries(["trips"]);
      },
      onError: (error: Error) => {
        console.error("Error updating trip:", error);
        // Obsługa błędów np. toast z informacją
      },
    }
  );
};
