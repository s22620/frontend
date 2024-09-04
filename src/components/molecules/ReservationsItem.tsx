import { FC } from "react";
import { ReservationType } from "../../types/reservation.type";
import { ReservationActions } from "./ReservationActions";
import { useTrip } from "../../hooks/useTrip";

interface ReservationItemProps {
  reservation: ReservationType;
}

export const ReservationItem: FC<ReservationItemProps> = ({ reservation }) => {
  const tripId = reservation.tripId;

  // Używamy hooka do pobrania danych wycieczki
  const { data: trip, isLoading, error } = useTrip(tripId);

  if (isLoading) {
    return <p>Ładowanie danych wycieczki...</p>;
  }

  if (error) {
    return <p>Błąd podczas ładowania danych wycieczki</p>;
  }

  if (!trip) {
    return <p>Nie znaleziono wycieczki</p>;
  }

  const adultPrice = trip.price;
  const childPrice = trip.price * 0.5; // 50% ceny bazowej dla dzieci

  // Obliczenie końcowej ceny
  const totalPrice =
    reservation.numAdults * adultPrice + reservation.numChildren * childPrice;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      <div>
        <h2 className="text-xl font-bold text-gray-800">{reservation.name}</h2>
        <p className="text-gray-600">
          {reservation.numAdults} dorosłych, {reservation.numChildren} dzieci
        </p>
        <p className="font-semibold text-gray-900">
          Cena: {totalPrice.toFixed(2)}zł
        </p>
      </div>
      <ReservationActions reservation={reservation} />
    </div>
  );
};
