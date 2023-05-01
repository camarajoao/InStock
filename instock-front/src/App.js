import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/warehouses/add" element={<AddWarehouse />} />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route
          path="/warehouses/:warehouseId/edit"
          element={<EditWarehouse />}
        />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<AddInventoryItem />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory/:itemId/edit" element={<EditInventoryItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
