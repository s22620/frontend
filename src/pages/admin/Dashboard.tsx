import { Route, Routes } from "react-router-dom";
import { DataTablePage } from "./DataTable.Page";
import { CreateTripPage } from "./CreateTripPage";
import { DashboardNavbar } from "../../components/molecules/DashboardNavbar";
import { Layout } from "../../components/templates/Layout";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="p-4">
        <DashboardNavbar />
        <Routes>
          <Route path="/" element={<DataTablePage />} />
          <Route path="/create-trip" element={<CreateTripPage />} />
        </Routes>
      </div>
    </Layout>
  );
};
