import { useState, FC } from "react";
import { NavButton } from "../atoms/NavButton";
import { MobileMenu } from "../molecules/MobileMenu";
import { DesktopMenu } from "../molecules/DesktopMenu";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-200">
      <div className="px-2 mx-auto sm:px-6 lg:px-8">
        <div className="sticky top-0 flex items-center justify-between w-full h-16 bg-opacity-50 ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <NavButton onClick={toggleMenu} isOpen={isOpen} />
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <DesktopMenu />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};
