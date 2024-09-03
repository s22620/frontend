import { ReactNode } from "react";
import { Navbar } from "../organisms/Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
