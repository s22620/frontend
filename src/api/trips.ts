import get from "axios";

export const getTrips = async () => {
  const response = await get(import.meta.env.VITE_API_URL + "/trips");
  return response.data;
};
