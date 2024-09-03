import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavLinksListProps {
  links: { to: string; label: string }[];
  isMobile?: boolean;
}

export const NavLinksList: FC<NavLinksListProps> = ({
  links,
  isMobile = false,
}) => {
  return (
    <div
      className={
        isMobile
          ? "space-y-1 flex flex-col justify-center items-center gap-10"
          : "flex text-2xl space-x-4"
      }
    >
      {links.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
