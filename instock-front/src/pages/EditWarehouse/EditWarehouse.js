import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditWarehouseForm from "../../components/EditWarehouseForm/EditWarehouseForm";
import "./EditWarehouse.scss";

function EditWarehouse() {
  const { warehouseId } = useParams();

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(-1); // Take user back to previous page
  }

  // Add state variable to house warehouse details
  const [warehouseDetails, setWarehouseDetails] = useState(null);

  // Make a GET request to obtain the details for a specific warehouse based on its ID
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then((response) => {
        if (response.status === 200) {
          setWarehouseDetails(response.data);
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  }, [warehouseId]); // Use warehouseId for dependency so this request is made if the warehouseId changes

  if (!warehouseDetails) {
    return <h1>Warehouse Details Loading...</h1>;
  }

  return (
    <div className="edit-warehouse-page">
      <header className="edit-warehouse-header">
          <img
            className="edit-warehouse-header__back-arrow"
            src={backArrow}
            alt="back arrow"
            onClick={handleClick}
          />
        <h1 className="edit-warehouse-header__title">Edit Warehouse</h1>
      </header>
      <EditWarehouseForm defaultStateValues={warehouseDetails} />
    </div>
  );
}

export default EditWarehouse;
