import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { useCreateReservation } from "../hooks/useCreateReservation";
import { useStripeSession } from "../hooks/useStripeSession";
import { Layout } from "../components/templates/Layout";

export const SuccessPage: FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const createReservation = useCreateReservation();

  // Używamy hooka do pobrania sesji Stripe
  const { data: session, isLoading, error } = useStripeSession(sessionId);

  // Jeśli dane sesji są załadowane i dostępne, wykonujemy rezerwację
  if (session && !createReservation.isLoading && !createReservation.isSuccess) {
    createReservation.mutate({
      tripId: session.metadata.tripId,
      numAdults: parseInt(session.metadata.numAdults, 10),
      numChildren: parseInt(session.metadata.numChildren, 10),
      email: session.customer_email,
    });
  }

  if (isLoading || createReservation.isLoading) {
    return <p>Ładowanie...</p>;
  }

  if (error || createReservation.isError) {
    return <p>Nie udało się zarezerwować wycieczki.</p>;
  }

  return (
    <Layout>
      <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-600">
          Płatność zakończona sukcesem!
        </h1>
        <p className="mt-4">
          Dziękujemy za dokonanie płatności i zarezerwowanie wycieczki.
        </p>
      </div>
    </Layout>
  );
};
