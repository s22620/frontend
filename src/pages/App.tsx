import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Trips } from "./Trips";
import { Trip } from "./Trip";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/trips/:tripId" element={<Trip />} />
    </Routes>
  );
};
