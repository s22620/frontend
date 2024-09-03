import { FC } from "react";
import { NavLinksList } from "./NavLinksList";
import { NAV_LINKS } from "../../lib/consts";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`${isOpen ? "block" : "hidden"} sm:hidden`}
      id="mobile-menu"
    >
      <div className="px-2 pt-2 pb-3">
        <NavLinksList links={NAV_LINKS} isMobile />
      </div>
    </div>
  );
};
