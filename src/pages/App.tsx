import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Trips } from "./Trips";
import { Trip } from "./Trip";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignInPage } from "./SignIn";
import { SignUpPage } from "./SignUp";
import { Reservations } from "./Reservations";

export const App = () => {
  return (
    <>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trips/:tripId" element={<Trip />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </SignedIn>

      <SignedOut>
        <Routes>
          <Route path="*" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </SignedOut>
    </>
  );
};
