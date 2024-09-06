import { FC, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card"; // Import Shadcn Card
import { Button } from "../ui/button"; // Import Shadcn Button
import { Input } from "../ui/input"; // Shadcn Input
import { useCreateTrip } from "../../hooks/useCreateTrip"; // Hook do tworzenia wycieczki
import { formatDate } from "../../lib/utils";

interface CreateTripFormProps {
  onSuccess?: () => void; // Funkcja, która zostanie wywołana po pomyślnym utworzeniu wycieczki
}

export const CreateTripForm: FC<CreateTripFormProps> = ({ onSuccess }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>(
    formatDate(new Date().toString())
  );
  const [endDate, setEndDate] = useState<string>(
    formatDate(new Date().toString())
  );
  const [price, setPrice] = useState<number>(0);
  const [imageSrc, setImageSrc] = useState<string>("");

  const createTrip = useCreateTrip(); // Hook do tworzenia wycieczki

  const handleSave = (): void => {
    // Prosta walidacja danych
    if (
      !title ||
      !description ||
      !startDate ||
      !endDate ||
      price <= 0 ||
      !imageSrc
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    // Wywołanie mutacji do utworzenia wycieczki
    createTrip.mutate(
      {
        title,
        description,
        startDate,
        endDate,
        price,
        imageSrc,
      },
      {
        onSuccess: () => {
          if (onSuccess) {
            onSuccess(); // Wywołaj przekazaną funkcję, jeśli została dostarczona
          }
        },
      }
    );
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Utwórz nową wycieczkę</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="title">Tytuł</label>
          <Input
            id="title"
            placeholder="Wprowadź tytuł wycieczki"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Opis</label>
          <Input
            id="description"
            placeholder="Wprowadź opis wycieczki"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startDate">Data rozpoczęcia</label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endDate">Data zakończenia</label>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Cena</label>
          <Input
            id="price"
            type="number"
            placeholder="Wprowadź cenę wycieczki"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="imageSrc">URL zdjęcia</label>
          <Input
            id="imageSrc"
            placeholder="Wprowadź URL zdjęcia wycieczki"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="default"
          onClick={handleSave}
          disabled={createTrip.isLoading} // Stan ładowania
        >
          {createTrip.isLoading ? "Zapisywanie..." : "Utwórz wycieczkę"}
        </Button>
      </CardFooter>
    </Card>
  );
};
