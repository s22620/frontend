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
      className="w-full p-4 text-white bg-center bg-cover cursor-pointer h-60 rounded-xl"
      style={{ backgroundImage: `url(${trip.imageSrc})` }}
      onClick={handleClick}
    >
      <div className="p-2 bg-black bg-opacity-50 rounded-xl">
        <h1 className="text-3xl font-bold">{trip.title}</h1>
        <p className="mt-3 text-lg">
          Od{" "}
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
        <p className="mt-10 text-3xl font-bold">{trip.price}zł</p>
      </div>
    </div>
  );
};
