import axios from "axios";

export const getStripeSession = async (sessionId: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/session/${sessionId}`
  );
  return response.data;
};

export const createStripeSession = async (reservationData: {
  tripId: string;
  numAdults: number;
  numChildren: number;
  email: string;
  tripPrice: number;
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/create-stripe-session`,
    reservationData
  );
  return response.data;
};
