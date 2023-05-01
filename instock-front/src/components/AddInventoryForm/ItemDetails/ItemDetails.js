import ItemFormText from "../ItemFormText/ItemFormText";
import ItemFormTextArea from "../ItemFormTextArea/ItemFormTextArea";
import ItemDropDown from "../ItemDropDown/ItemDropDown";
import "./ItemDetails.scss";

function ItemDetails(props) {
  return (
    <section className="item-details-section">
      <h1 className="item-details-section__title">Item Details</h1>
      <ItemFormText
        labelText={"Item Name"}
        state={props.itemName}
        setState={props.setItemName}
        extraInputClassName={
          props.validItemName === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validItemName === "error" ? "form-field-error--show" : ""
        }
      />
      <ItemFormTextArea
        labelText={"Description"}
        state={props.description}
        setState={props.setDescription}
        extraInputClassName={
          props.validDescription === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validDescription === "error" ? "form-field-error--show" : ""
        }
      />
      <ItemDropDown
        labelText={"Category"}
        state={props.category}
        setState={props.setCategory}
        extraInputClassName={
          props.validCategory === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validCategory === "error" ? "form-field-error--show" : ""
        }
      />
    </section>
  );
}

export default ItemDetails;
