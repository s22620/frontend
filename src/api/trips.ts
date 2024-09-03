import axios from "axios";

export const getTrips = async () => {
  const response = await axios.get(import.meta.env.VITE_API_URL + "/trips");
  return response.data;
};
