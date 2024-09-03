import axios from "axios";
import { ReservationType } from "../types/reservation.type";

export const getReservations = async () => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/reservations"
  );
  return response.data;
};

export const deleteReservation = async (reservationId: string) => {
  await axios.delete(
    `${import.meta.env.VITE_API_URL}/reservations/${reservationId}`
  );
};

export const updateReservation = async (
  reservationId: string,
  updatedData: Partial<ReservationType>
) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/reservations/${reservationId}`,
    updatedData
  );
  return response.data;
};
