import WarehouseFormField from "../WarehouseFormField/WarehouseFormField";
import "./WarehouseDetailsFormSection.scss";

function WarehouseDetailsFormSection(props) {

  return (
    <section className="warehouse-details-section">
      <h1 className="warehouse-details-section__title">Warehouse Details</h1>
      <WarehouseFormField
        labelText={"Warehouse Name"}
        state={props.warehouseName}
        setState={props.setWarehouseName}
        extraInputClassName={
          props.validWarehouseName === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validWarehouseName === "error" ? "form-field-error--show" : ""
        }
      />
      <WarehouseFormField
        labelText={"Street Address"}
        state={props.streetAddress}
        setState={props.setStreetAddress}
        extraInputClassName={
          props.validAddress === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validAddress === "error" ? "form-field-error--show" : ""
        }
      />
      <WarehouseFormField
        labelText={"City"}
        state={props.city}
        setState={props.setCity}
        extraInputClassName={
          props.validCity === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validCity === "error" ? "form-field-error--show" : ""
        }
      />
      <WarehouseFormField
        labelText={"Country"}
        state={props.country}
        setState={props.setCountry}
        extraInputClassName={`form-field-input--last ${
          props.validCountry === "error" ? "form-field-input--error" : ""
        }`}
        errorMessageClassName={
          props.validCountry === "error"
            ? "form-field-error--show form-field-error--show--last"
            : ""
        }
      />
    </section>
  );
}

export default WarehouseDetailsFormSection;
