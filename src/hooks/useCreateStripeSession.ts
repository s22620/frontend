import { useMutation } from "react-query";
import { createStripeSession } from "../api/stripe";

export const useCreateStripeSession = () => {
  return useMutation(createStripeSession);
};
