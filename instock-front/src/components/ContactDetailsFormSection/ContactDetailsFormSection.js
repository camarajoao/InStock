import WarehouseFormField from "../WarehouseFormField/WarehouseFormField";
import "./ContactDetailsFormSection.scss";

function ContactDetailsFormSection(props) {

  return (
    <section className="contact-details-section">
      <h1 className="contact-details-section__title">Contact Details</h1>
      <WarehouseFormField
        labelText={"Contact Name"}
        state={props.contactName}
        setState={props.setContactName}
        extraInputClassName={
          props.validContactName === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validContactName === "error" ? "form-field-error--show" : ""
        }
      />
      <WarehouseFormField
        labelText={"Position"}
        state={props.position}
        setState={props.setPosition}
        extraInputClassName={
          props.validPosition === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validPosition === "error" ? "form-field-error--show" : ""
        }
      />
      <WarehouseFormField
        labelText={
          props.validPhoneNumber === "error"
            ? "Phone Number: Format of +1 (123) 456-7890"
            : "Phone Number"
        }
        state={props.phoneNumber}
        setState={props.setPhoneNumber}
        extraInputClassName={
          props.validPhoneNumber === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validPhoneNumber === "error" ? "form-field-error--show" : ""
        }
      />
      <WarehouseFormField
        labelText={
          props.validEmail === "error"
            ? "Email: Valid email address required"
            : "Email"
        }
        state={props.email}
        setState={props.setEmail}
        extraInputClassName={`form-field-input--last ${
          props.validEmail === "error" ? "form-field-input--error" : ""
        }`}
        errorMessageClassName={
          props.validEmail === "error"
            ? "form-field-error--show form-field-error--show--last"
            : ""
        }
      />
    </section>
  );
}

export default ContactDetailsFormSection;
