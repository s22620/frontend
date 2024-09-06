import { Layout } from "../components/templates/Layout";

export const CancelPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-600">Płatność anulowana</h1>
        <p className="mt-4">
          Niestety, płatność nie została zrealizowana. Proszę spróbować
          ponownie.
        </p>
      </div>
    </Layout>
  );
};
