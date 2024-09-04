import axios from "axios";

export const getTrips = async () => {
  const response = await axios.get(import.meta.env.VITE_API_URL + "/trips");
  return response.data;
};

import { TripType } from "../types/trip.type";

export const getTrip = async (tripId: string): Promise<TripType> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/trips/${tripId}`
  );
  return response.data;
};
