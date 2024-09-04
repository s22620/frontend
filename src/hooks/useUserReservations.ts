import { useQuery } from "react-query";
import { ReservationType } from "../types/reservation.type";
import { getUserReservations } from "../api/reservations";

export const useUserReservations = (userEmail: string) => {
  return useQuery<ReservationType[], Error>(["userReservations"], () =>
    getUserReservations(userEmail)
  );
};
