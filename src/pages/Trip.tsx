import { FC } from "react";
import { useParams } from "react-router-dom";
import { useTrips } from "../hooks/useTrips";
import { TripType } from "../types/trip.type";

export const Trip: FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const { data: trips } = useTrips();

  const trip = trips?.find((trip: TripType) => trip.id === tripId);

  if (!trip) {
    return <p>Wycieczka nie została znaleziona</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{trip.title}</h1>
      <p>{trip.description}</p>
      <p>
        Od {new Date(trip.startDate).toLocaleDateString()} do{" "}
        {new Date(trip.endDate).toLocaleDateString()}
      </p>
      <p>Cena: {trip.price}zł</p>
      <img
        src={trip.imageSrc}
        alt={trip.title}
        className="w-full h-auto mt-4"
      />
    </div>
  );
};
