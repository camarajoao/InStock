import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FormCTAButton from "../FormCTAButton/FormCTAButton";
import ItemAvailability from "../AddInventoryForm/ItemAvailability/ItemAvailability";
import ItemDetails from "../AddInventoryForm/ItemDetails/ItemDetails";
import "./EditInventoryForm.scss";

function AddInventoryForm({ defaultStateValues }) {
  const inventoryObject = useParams();
  const navigate = useNavigate();
  const inventoryId = inventoryObject.itemId;

  // Item Details States
  const [itemName, setItemName] = useState(defaultStateValues.item_name);
  const [description, setDescription] = useState(
    defaultStateValues.description
  );
  const [category, setCategory] = useState(defaultStateValues.category);
  const [validItemName, setValidItemName] = useState(false);
  const [validDescription, setValidDescription] = useState(false);
  const [validCategory, setValidCategory] = useState(false);

  // Item Availability States
  const [status, setStatus] = useState(defaultStateValues.status);
  const [quantity, setQuantity] = useState(defaultStateValues.quantity);
  const [warehouseName, setWarehouseName] = useState(
    defaultStateValues.warehouse_name
  );
  const [validStatus, setValidStatus] = useState(false);
  const [validQuantity, setValidQuantity] = useState(false);
  const [validWarehouse, setValidWarehouse] = useState(false);

  let outOfStockQuantity;

  //obtains list of warehouse items
  const [warehouseList, setWarehouseList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/warehouses").then((response) => {
      if (response.status === 200) {
        const axiosData = response.data;
        setWarehouseList(axiosData);
      }
    });
  }, []);

  // Determine when form submission is successful in order to toggle success message
  const [formSubmissionSucessful, setFormSubmissionSucessful] = useState(false);

  function handleClick() {
    navigate(-1); // Navigates the user to the previous page
  }

  const validateForm = () => {
    // Variable to check if form is valid
    let isFormValid = true;

    // Check warehouse details form fields
    if (!itemName) {
      setValidItemName("error");
      isFormValid = false;
    } else {
      setValidItemName(true);
    }

    if (!description) {
      setValidDescription("error");
      isFormValid = false;
    } else {
      setValidDescription(true);
    }

    if (!category || category === "Please select") {
      setValidCategory("error");
      isFormValid = false;
    } else {
      setValidCategory(true);
    }

    if (!status) {
      setValidStatus("error");
      isFormValid = false;
    } else {
      setValidStatus(true);
    }

    // Check quantity when status has yet to be selected or when in stock
    if (!quantity) {
      setValidQuantity("error");
      isFormValid = false;
    } else {
      setValidQuantity(true);
    }

    // When out of stock is selected, the quantity field will dissapear so it can be set to 0 and true to hide any error display
    if (status === "Out of Stock") {
      setValidQuantity(true);
      setQuantity(0);
      outOfStockQuantity = 0; // Use this variable to avoid the asynchronous wait to set quantity
      isFormValid = true;
    }

    if (!warehouseName || warehouseName === "Please select") {
      setValidWarehouse("error");
      isFormValid = false;
    } else {
      setValidWarehouse(true);
    }

    // Check that every field is valid
    return isFormValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //To get warehouse id using warehouse name

    if (validateForm()) {
      const myWarehouse = warehouseList.find(
        (element) => element.warehouse_name === warehouseName
      );
      const warehouse_id = myWarehouse.id;

      axios
        .put(`http://localhost:8080/inventory/${inventoryId}`, {
          item_name: itemName,
          description: description,
          category: category,
          status: status,
          quantity: status === "Out of Stock" ? outOfStockQuantity : quantity, // Use a variable if out of stock to avoid needing to wait for asynchronous state to be set to 0,
          warehouse_id: warehouse_id,
        })
        .then((response) => {
          if (response.status === 200) {
            setFormSubmissionSucessful(true);
            setTimeout(() => {
              navigate("/inventory");
            }, 3000);
          }
        })
        .catch((error) => {
          <h2>{error}</h2>;
        });
    }
  };

  return (
    <>
      <form className="addInventoryItemForm" onSubmit={handleSubmit}>
        <div className="addInventoryItemForm__input-sections">
          <ItemDetails
            itemName={itemName}
            setItemName={setItemName}
            description={description}
            setDescription={setDescription}
            category={category}
            setCategory={setCategory}
            validItemName={validItemName}
            validDescription={validDescription}
            validCategory={validCategory}
          />
          <ItemAvailability
            status={status}
            setStatus={setStatus}
            quantity={quantity}
            setQuantity={setQuantity}
            warehouseName={warehouseName}
            setWarehouseName={setWarehouseName}
            validStatus={validStatus}
            validQuantity={validQuantity}
            validWarehouse={validWarehouse}
          />
        </div>
        <div className="addInventoryItemForm__buttons-container">
          <FormCTAButton
            type={"button"}
            className={"form-cta-button--secondary"}
            buttonText={"Cancel"}
            action={handleClick}
          />
          <FormCTAButton
            type={"submit"}
            className={
              "form-cta-button--primary form-cta-button--primary--edit"
            }
            buttonText={"Save"}
          />
        </div>
      </form>
      <h2
        className={
          formSubmissionSucessful
            ? "addInventoryItemForm__message--success"
            : "addInventoryItemForm__message"
        }
      >
        This inventory item has successfully been edited! Please wait, returning
        to inventories page...
      </h2>
    </>
  );
}

export default AddInventoryForm;
