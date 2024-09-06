import { useDeleteTrip } from "../../hooks/useDeleteTrip";
import { Button } from "../ui/button";
import { EditTrip } from "../atoms/EditTrip";
import { FC } from "react";
import { TripType } from "../../types/trip.type";

export const TripActions: FC<{ trip: TripType }> = ({ trip }) => {
  const deleteTrip = useDeleteTrip();

  const handleDelete = () => {
    if (
      window.confirm(`Czy na pewno chcesz usunąc wycieczkę: ${trip.title}?`)
    ) {
      deleteTrip.mutate(trip.id);
    }
  };

  return (
    <div className="flex gap-2">
      <EditTrip trip={trip} />
      <Button variant="destructive" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};
