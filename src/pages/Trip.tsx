import { FC } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useTrips } from "../hooks/useTrips";
import { useCreateStripeSession } from "../hooks/useCreateStripeSession"; // Importujemy naszego hooka
import { Layout } from "../components/templates/Layout";
import { TripDetails } from "../components/organisms/TripDetails";
import { ReservationForm } from "../components/molecules/ReservationForm";

export const Trip: FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const { data: trips } = useTrips();
  const { user } = useUser();
  const createStripeSession = useCreateStripeSession(); // Używamy hooka

  const trip = trips?.find((trip) => trip.id === tripId);
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  const handleCheckout = (numAdults: number, numChildren: number) => {
    if (trip && userEmail) {
      createStripeSession.mutate(
        {
          tripId: trip.id,
          numAdults,
          numChildren,
          email: userEmail,
          tripPrice: trip.price,
        },
        {
          onSuccess: (data) => {
            window.location.href = data.url; // Przekierowanie do Stripe Checkout
          },
          onError: (error) => {
            console.error("Error creating Stripe session:", error);
          },
        }
      );
    }
  };

  if (!trip) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-red-600">
          Wycieczka nie została znaleziona
        </p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <TripDetails trip={trip} />
        <ReservationForm
          onSubmit={handleCheckout}
          isLoading={createStripeSession.isLoading}
        />
      </div>
    </Layout>
  );
};
