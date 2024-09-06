import { FC } from "react";
import { TripType } from "../../types/trip.type";

interface TripDetailsProps {
  trip: TripType;
}

export const TripDetails: FC<TripDetailsProps> = ({ trip }) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-gray-800">{trip.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{trip.description}</p>
      </div>
      <div className="mt-6">
        <p className="text-xl font-semibold text-gray-700">
          <span className="font-bold">Data:</span> Od{" "}
          {new Date(trip.startDate).toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          do{" "}
          {new Date(trip.endDate).toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="mt-4 text-2xl font-bold text-gray-900">
          Cena: {trip.price}zł za osobę dorosłą
        </p>
      </div>
    </div>
  );
};
