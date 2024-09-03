import { FC, ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 text-sm font-medium rounded-md ${isActive ? "text-white bg-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
      }
    >
      {children}
    </RouterNavLink>
  );
};
