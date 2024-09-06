import { ReactNode } from "react";
import { Navbar } from "../organisms/Navbar";
import { Footer } from "../molecules/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};
