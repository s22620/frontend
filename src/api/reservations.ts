import axios from "axios";
import { ReservationType } from "../types/reservation.type";

// Funkcja pobierania wszystkich rezerwacji (dla administratora)
export const getReservations = async () => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/reservations"
  );
  return response.data;
};

// Funkcja pobierania rezerwacji użytkownika na podstawie adresu e-mail
export const getUserReservations = async (userEmail: string) => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/reservations/user",
    {
      headers: {
        "user-email": userEmail, // Przesyłanie adresu e-mail w nagłówku
      },
    }
  );
  return response.data;
};

export const createReservation = async (reservationData: ReservationType) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/reservations`,
    reservationData
  );
  return response.data;
};

// Funkcja usuwania rezerwacji
export const deleteReservation = async (reservationId: string) => {
  await axios.delete(
    `${import.meta.env.VITE_API_URL}/reservations/${reservationId}`
  );
};

// Funkcja aktualizacji rezerwacji
export const updateReservation = async (
  reservationId: string,
  updatedData: Partial<ReservationType>
) => {
  return axios.put(
    `${import.meta.env.VITE_API_URL}/reservations/${reservationId}`,
    updatedData
  );
};
