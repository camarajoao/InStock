import WarehouseDetailsHeader from "../../components/WarehouseDetailsHeader/WarehouseDetailsHeader";
import WarehouseDetailsInventory from "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory";
import "./WarehouseDetails.scss";

function WarehouseDetails() {
  return (
    <>
      <main className="details-page">
        <WarehouseDetailsHeader />
        <WarehouseDetailsInventory />
      </main>
    </>
  );
}

export default WarehouseDetails;
