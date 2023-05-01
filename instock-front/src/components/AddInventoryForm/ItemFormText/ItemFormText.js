import errorIcon from "../../../assets/Icons/error-24px.svg";
import "./ItemFormText.scss";

function ItemFormText({
  errorMessageClassName,
  extraInputClassName,
  toggleHideClass,
  labelText,
  state,
  setState,
}) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="form-field-container">
      <label
        className={`form-field-label ${toggleHideClass}`}
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <input
        className={`form-field-input ${extraInputClassName} ${toggleHideClass}`}
        type="text"
        id={labelText}
        name={labelText}
        placeholder={labelText}
        onChange={handleChange}
        value={state}
      ></input>
      <div className={`form-field-error ${errorMessageClassName}`}>
        <img
          className="form-field-error__icon"
          src={errorIcon}
          alt="error icon"
        />
        <h3 className="form-field-error__message">This field is required</h3>
      </div>
    </div>
  );
}

export default ItemFormText;
