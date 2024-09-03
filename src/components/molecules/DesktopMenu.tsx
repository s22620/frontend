import { FC } from "react";
import { NavLinksList } from "./NavLinksList";
import { NAV_LINKS } from "../../lib/consts";

export const DesktopMenu: FC = () => {
  return <NavLinksList links={NAV_LINKS} />;
};
