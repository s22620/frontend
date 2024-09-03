import { useTrips } from "../../hooks/useTrips";
import { TripsTile } from "../molecules/TripsTile";

export const TripsGrid = () => {
  const { data: trips, isLoading, error } = useTrips();

  if (isLoading) {
    return <p>Loading trips...</p>;
  }

  if (error) {
    return <p>Error loading trips. Please try again later.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-10 m-10 md:grid-cols-2 lg:grid-cols-3">
      {trips && trips.length > 0 ? (
        trips.map((trip) => <TripsTile key={trip.id} trip={trip} />)
      ) : (
        <p>No trips available.</p>
      )}
    </div>
  );
};
