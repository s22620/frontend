import { useQuery } from "react-query";
import { getStripeSession } from "../api/stripe";

export const useStripeSession = (sessionId: string | null) => {
  return useQuery(
    ["stripeSession", sessionId],
    () => getStripeSession(sessionId!),
    {
      enabled: !!sessionId, // Hook uruchomi się tylko wtedy, gdy sessionId jest dostępne
    }
  );
};
