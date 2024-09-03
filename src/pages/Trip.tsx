import { FC } from "react";
import { useParams } from "react-router-dom";
import { useTrips } from "../hooks/useTrips";
import { TripType } from "../types/trip.type";
import { Layout } from "../components/templates/Layout";

export const Trip: FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const { data: trips } = useTrips();

  const trip = trips?.find((trip: TripType) => trip.id === tripId);

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
                Cena: {trip.price}zł
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
