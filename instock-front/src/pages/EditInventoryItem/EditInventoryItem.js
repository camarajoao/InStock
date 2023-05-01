import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditInventoryForm from "../../components/EditInventoryForm/EditInventoryForm";
import "./EditInventoryItem.scss";

function EditInventoryItem() {
  const inventoryObject = useParams();
  const navigate = useNavigate();
  const inventoryId = inventoryObject.itemId;

  const handleClick = () => {
    navigate(-1); // Take user back to previous page
  };

  const [inventoryDetails, setInventoryDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventory/${inventoryId}`)
      .then((response) => {
        if (response.status === 200) {
          setInventoryDetails(response.data);
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  }, [inventoryId]);

  if (!inventoryDetails) {
    return <h1>Inventory Details Loading...</h1>;
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
        <h1 className="edit-warehouse-header__title">Edit Inventory Item</h1>
      </header>
      <EditInventoryForm defaultStateValues={inventoryDetails} />
    </div>
  );
}

export default EditInventoryItem;
