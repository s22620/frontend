import { useQuery } from "react-query";
import { TripType } from "../types/trip.type";
import { getTrip } from "../api/trips";

export const useTrip = (tripId: string) => {
  return useQuery<TripType>(["trip", tripId], () => getTrip(tripId), {
    staleTime: 1000 * 60 * 5,
  });
};
