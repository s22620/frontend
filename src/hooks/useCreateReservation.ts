import { useMutation } from "react-query";
import { createReservation } from "../api/reservations";
import { ReservationType } from "../types/reservation.type";

export const useCreateReservation = () => {
  return useMutation(async (reservationData: ReservationType) => {
    return createReservation(reservationData);
  });
};
