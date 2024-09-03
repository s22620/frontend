import { useReservations } from "../../hooks/useReservations";
import { ReservationItem } from "../molecules/ReservationsItem";

export const ReservationsList = () => {
  const { data: reservations, isLoading, error } = useReservations();

  if (isLoading) {
    return <p>Ładowanie rezerwacji...</p>;
  }

  if (error) {
    return <p>Błąd podczas ładowania rezerwacji: {error.message}</p>;
  }

  return (
    <div className="space-y-6">
      {reservations && reservations.length > 0 ? (
        reservations.map((reservation) => (
          <ReservationItem key={reservation.id} reservation={reservation} />
        ))
      ) : (
        <p>Brak dostępnych rezerwacji.</p>
      )}
    </div>
  );
};
