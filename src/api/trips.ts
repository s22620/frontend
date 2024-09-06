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

export const createTrip = async (tripData: TripType): Promise<TripType> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/trips`,
    tripData
  );
  return response.data;
};

export const deleteTrip = async (tripId: string) => {
  await axios.delete(`${import.meta.env.VITE_API_URL}/trips/${tripId}`);
};

export const updateTrip = async (tripData: TripType): Promise<TripType> => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/trips/${tripData.id}`,
    tripData
  );
  return response.data;
};
