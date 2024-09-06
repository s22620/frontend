import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin"; // Hook do sprawdzania roli admina
import { DataTable } from "../../components/organisms/DataTable";
import { columns } from "../../lib/consts";

export const DataTablePage = () => {
  const { isAdmin, loading } = useAdmin(); // Hook sprawdzający, czy użytkownik jest adminem
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/"); // Przekierowanie, jeśli użytkownik nie jest adminem
    }
  }, [isAdmin, loading, navigate]);

  if (loading) {
    return <p>Loading...</p>; // Wyświetlanie informacji, dopóki status admina się ładuje
  }

  if (!isAdmin) {
    return <p>You are not authorized to view this page.</p>; // Gdy użytkownik nie ma uprawnień
  }

  return (
    <div className="p-6">
      <DataTable columns={columns} />
    </div>
  );
};
