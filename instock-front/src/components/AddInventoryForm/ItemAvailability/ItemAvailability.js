import ItemFormText from "../ItemFormText/ItemFormText";
import ItemFormRadio from "../ItemFormRadio/ItemFormRadio";
import "./ItemAvailability.scss";
import WarehouseDropDown from "../WarehouseDropDown/WarehouseDropDown";

function ItemAvailability(props) {
  return (
    <section className="warehouse-details-section">
      <h1 className="warehouse-details-section__title">Item Availability</h1>
      <ItemFormRadio
        labelText={"Status"}
        state={props.status}
        setState={props.setStatus}
        extraInputClassName={
          props.validStatus === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validStatus === "error" ? "form-field-error--show" : ""
        }
      />
      <ItemFormText
        labelText={"Quantity"}
        state={props.quantity}
        setState={props.setQuantity}
        extraInputClassName={
          props.validQuantity === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validQuantity === "error" ? "form-field-error--show" : ""
        }
        toggleHideClass={
          props.status === "Out of Stock" ? "form-field--hide" : ""
        }
      />
      <WarehouseDropDown
        labelText={"Warehouse"}
        state={props.warehouseName}
        setState={props.setWarehouseName}
        extraInputClassName={
          props.validWarehouse === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validWarehouse === "error" ? "form-field-error--show" : ""
        }
      />
    </section>
  );
}

export default ItemAvailability;
