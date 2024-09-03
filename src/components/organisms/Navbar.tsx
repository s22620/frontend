import { useState } from "react";
import { NavButton } from "../atoms/NavButton";
import { MobileMenu } from "../molecules/MobileMenu";
import { DesktopMenu } from "../molecules/DesktopMenu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 bg-opacity-90 bg-zinc-100">
      <div className="px-2 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full p-4">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <NavButton onClick={toggleMenu} isOpen={isOpen} />
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <DesktopMenu />
            </div>
          </div>
          <MobileMenu isOpen={isOpen} />
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
