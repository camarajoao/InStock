import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderButtons from "./HeaderButtons/HeaderButtons";

export default function HeaderContainer() {
  const {pathname} = useLocation();
  const [isWarehouse, setIsWarehouse] = useState(false);
  const [isInventory, setIsInventory] = useState(false);

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname.includes("/warehouses")
    ) {
      setIsWarehouse(true);
      setIsInventory(false);
    } else if (
      pathname.includes("/inventory")
    ) {
      setIsWarehouse(false);
      setIsInventory(true);
    } else { // Manage scenario where user manully navigates to a non-existent path
      setIsWarehouse(false);
      setIsInventory(false);
    }
  }, [pathname]); // Run these checks only when the path changes

  return <HeaderButtons isWarehouse={isWarehouse} isInventory={isInventory} />;
}
