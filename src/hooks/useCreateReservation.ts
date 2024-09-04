import { useMutation } from "react-query";
import { createReservation } from "../api/reservations";
import { ReservationType } from "../types/reservation.type";

export const useCreateReservation = () => {
  return useMutation(async (reservationData: ReservationType) => {
    console.log(reservationData);
    return createReservation(reservationData);
  });
};
