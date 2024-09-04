import { useQuery } from "react-query";
import { ReservationType } from "../types/reservation.type";
import { getReservations } from "../api/reservations";

export const useAllReservations = () => {
  return useQuery<ReservationType[], Error>(
    ["allReservations"],
    getReservations
  );
};
