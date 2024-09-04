import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react"; // Importujemy Clerk hook
import { useTrips } from "../hooks/useTrips";
import { TripType } from "../types/trip.type";
import { Layout } from "../components/templates/Layout";
import { useCreateReservation } from "../hooks/useCreateReservation";

export const Trip: FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const { data: trips } = useTrips();
  const mutation = useCreateReservation(); // Hook do mutacji
  const { user } = useUser(); // Pobieramy dane użytkownika z Clerk

  const trip = trips?.find((trip: TripType) => trip.id === tripId);

  // Sprawdzamy, czy mamy adres e-mail i imię
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  const [numAdults, setNumAdults] = useState(1); // Początkowa liczba dorosłych
  const [numChildren, setNumChildren] = useState(0); // Początkowa liczba dzieci

  const handleSubmit = () => {
    if (trip && userEmail) {
      mutation.mutate({
        tripId: trip.id,
        numAdults,
        numChildren,
        email: userEmail,
      });
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
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2">
            <img
              src={trip.imageSrc}
              alt={trip.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-between lg:w-1/2">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{trip.title}</h1>
              <p className="mt-4 text-lg text-gray-600">{trip.description}</p>
            </div>
            <div className="mt-6">
              <p className="text-xl font-semibold text-gray-700">
                <span className="font-bold">Data:</span> Od{" "}
                {new Date(trip.startDate).toLocaleDateString()} do{" "}
                {new Date(trip.endDate).toLocaleDateString()}
              </p>
              <p className="mt-4 text-2xl font-bold text-gray-900">
                Cena: {trip.price}zł za osobę dorosłą
              </p>
            </div>

            {/* Sekcja rezerwacji */}
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-lg font-semibold text-gray-700">
                    Dorośli:
                  </label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        setNumAdults((prev) => Math.max(1, prev - 1))
                      }
                      className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                    >
                      -
                    </button>
                    <span>{numAdults}</span>
                    <button
                      onClick={() => setNumAdults((prev) => prev + 1)}
                      className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-700">
                    Dzieci:
                  </label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        setNumChildren((prev) => Math.max(0, prev - 1))
                      }
                      className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                    >
                      -
                    </button>
                    <span>{numChildren}</span>
                    <button
                      onClick={() => setNumChildren((prev) => prev + 1)}
                      className="px-2 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                disabled={mutation.isLoading || !userEmail}
              >
                {mutation.isLoading ? "Rezerwowanie..." : "Zarezerwuj"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
