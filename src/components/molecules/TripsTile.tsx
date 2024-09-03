import { FC } from "react";
import { TripType } from "../../types/trip.type";
import { useNavigate } from "react-router-dom";

interface TripsTileProps {
  trip: TripType;
}

export const TripsTile: FC<TripsTileProps> = ({ trip }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trips/${trip.id}`);
  };

  return (
    <div
      className="w-full h-40 p-4 cursor-pointer rounded-xl bg-zinc-100"
      onClick={handleClick}
    >
      <h1 className="text-lg font-bold">{trip.title}</h1>
      <p>{trip.description}</p>
      <p>
        Od {new Date(trip.startDate).toLocaleDateString()} do{" "}
        {new Date(trip.endDate).toLocaleDateString()}
      </p>
      <p>{trip.price}zł</p>
    </div>
  );
};
