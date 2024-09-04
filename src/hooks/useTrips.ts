import { useQuery } from "react-query";
import { getTrips } from "../api/trips";
import { TripType } from "../types/trip.type";

export const useTrips = () => {
  return useQuery<TripType[]>(["trips"], getTrips, {
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      console.error("Error fetching trips:", error);
    },
  });
};
