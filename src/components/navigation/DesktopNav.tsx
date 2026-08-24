import { NavDropdown } from "./NavDropdown";
import { primaryNavigation } from "@/data/navigation";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {primaryNavigation.map((item) => (
        <NavDropdown key={item.id} item={item} />
      ))}
    </nav>
  );
}
