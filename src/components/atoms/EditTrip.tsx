import { FC, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button"; // Shadcn button
import { useUpdateTrip } from "../../hooks/useUpdateTrip"; // Hook do aktualizacji wycieczki
import { TripType } from "../../types/trip.type";
import { Input } from "../ui/input"; // Shadcn Input
import { formatDate } from "../../lib/utils";

// Funkcja do formatowania daty na YYYY-MM-DD
interface EditTripProps {
  trip: TripType; // Typujemy trip na podstawie zdefiniowanego typu TripType
}

export const EditTrip: FC<EditTripProps> = ({ trip }) => {
  const [title, setTitle] = useState<string>(trip.title);
  const [description, setDescription] = useState<string>(trip.description);
  const [startDate, setStartDate] = useState<string>(
    formatDate(trip.startDate)
  ); // Formatujemy datę
  const [endDate, setEndDate] = useState<string>(formatDate(trip.endDate)); // Formatujemy datę
  const [price, setPrice] = useState<number>(trip.price);
  const [imageSrc, setImageSrc] = useState<string>(trip.imageSrc);

  const updateTrip = useUpdateTrip(); // Hook do aktualizacji

  const handleSave = (): void => {
    // Walidacja danych i aktualizacja wycieczki
    updateTrip.mutate({
      id: trip.id,
      title,
      description,
      startDate,
      endDate,
      price,
      imageSrc,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Trip</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Input
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
          />
          <Button
            onClick={handleSave}
            disabled={updateTrip.isLoading} // Dodajemy stan ładowania
          >
            {updateTrip.isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
