import { useQuery } from "react-query";
import { getReservations } from "../api/reservations";
import { ReservationType } from "../types/reservation.type";

export const useReservations = () => {
  return useQuery<ReservationType[], Error>(["reservations"], getReservations, {
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      console.error("Error fetching reservations:", error);
    },
  });
};
