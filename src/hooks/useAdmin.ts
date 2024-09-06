import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export const useAdmin = () => {
  const { isLoaded, user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      // Sprawdzamy, czy użytkownik jest adminem na podstawie publicMetadata
      if (user?.publicMetadata?.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    }
  }, [isLoaded, user]);

  return { isAdmin, loading };
};
