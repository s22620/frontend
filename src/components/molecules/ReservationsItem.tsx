import { FC } from "react";
import { ReservationType } from "../../types/reservation.type";
import { ReservationActions } from "./ReservationActions";

interface ReservationItemProps {
  reservation: ReservationType;
}

export const ReservationItem: FC<ReservationItemProps> = ({ reservation }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      <div>
        <h2 className="text-xl font-bold text-gray-800">{reservation.name}</h2>
        <p className="text-gray-600"></p>
        <p className="text-gray-600">
          {reservation.numAdults} dorosłych, {reservation.numChildren} dzieci
        </p>
        <p className="font-semibold text-gray-900">Cena: 100zł</p>
      </div>
      <ReservationActions reservation={reservation} />
    </div>
  );
};
