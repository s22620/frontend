import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin";
import { CreateTripForm } from "../../components/organisms/CreateTripForm";

export const CreateTripPage: FC = () => {
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

  return <CreateTripForm onSuccess={() => navigate("/trips")} />;
};
