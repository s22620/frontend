import { TripActions } from "../components/molecules/TripActions";
import { ColumnDef } from "@tanstack/react-table";
import { TripType } from "../types/trip.type";

export const NAV_LINKS = [
  { to: "/", label: "Strona główna" },
  { to: "/trips", label: "Nasze wycieczki" },
  { to: "/reservations", label: "Twoje rezerwacje" },
  { to: "/contact", label: "Kontakt" },
];

export const columns: ColumnDef<TripType>[] = [
  {
    accessorKey: "title",
    header: "Tytuł",
  },
  {
    accessorKey: "startDate",
    header: "Data rozpoczęcia:",
    cell: ({ getValue }) =>
      new Date(getValue() as string).toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
  },
  {
    accessorKey: "endDate",
    header: "Data zakończenia:",
    cell: ({ getValue }) =>
      new Date(getValue() as string).toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
  },
  {
    accessorKey: "price",
    header: "Cena (zł)",
  },
  {
    id: "actions",
    cell: ({ row }) => <TripActions trip={row.original} />,
  },
];
