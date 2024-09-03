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
      className="w-full p-4 text-white bg-center bg-cover cursor-pointer rounded-xl"
      style={{ backgroundImage: `url(${trip.imageSrc})` }}
      onClick={handleClick}
    >
      <div className="p-2 bg-black bg-opacity-50 rounded-xl">
        <h1 className="text-lg font-bold">{trip.title}</h1>
        <p>{trip.description}</p>
        <p>
          Od {new Date(trip.startDate).toLocaleDateString()} do{" "}
          {new Date(trip.endDate).toLocaleDateString()}
        </p>
        <p>{trip.price}zł</p>
      </div>
    </div>
  );
};
