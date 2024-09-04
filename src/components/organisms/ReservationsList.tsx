import { useUser } from "@clerk/clerk-react"; // Importujemy hook Clerk do pobierania danych użytkownika
import { useUserReservations } from "../../hooks/useUserReservations";
import { ReservationItem } from "../molecules/ReservationsItem";

export const ReservationsList = () => {
  const { user } = useUser(); // Pobieramy obiekt użytkownika z Clerk

  const userEmail = user?.emailAddresses[0]?.emailAddress; // Pobieramy pierwszy adres e-mail użytkownika

  // Sprawdzamy, czy email jest dostępny przed wywołaniem hooka
  const {
    data: reservations,
    isLoading,
    error,
  } = useUserReservations(userEmail || "");

  if (!userEmail) {
    return <p>Nie znaleziono adresu e-mail użytkownika.</p>;
  }

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
