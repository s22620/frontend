import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const DashboardNavbar = () => {
  return (
    <NavigationMenu className="p-6 mx-auto text-xl">
      <NavigationMenuList className="flex space-x-4 ">
        <NavigationMenuItem>
          <NavLink to="/dashboard">
            <NavigationMenuLink>Tabela wycieczek</NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink to="/dashboard/create-trip">
            <NavigationMenuLink>Utwórz wycieczkę</NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
