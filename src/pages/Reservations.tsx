import { ReservationsList } from "../components/organisms/ReservationsList";
import { Layout } from "../components/templates/Layout";

export const Reservations = () => {
  return (
    <Layout>
      <div className="max-w-6xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Moje Rezerwacje
        </h1>
        <ReservationsList />
      </div>
    </Layout>
  );
};
