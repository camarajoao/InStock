import errorIcon from "../../../assets/Icons/error-24px.svg";
import "./ItemFormRadio.scss";

function ItemFormRadio({
  errorMessageClassName,
  extraInputClassName,
  labelText,
  state,
  setState,
}) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="form-field-container">
      <label className="form-field-label" htmlFor={labelText}>
        {labelText}
      </label>
      <div className="form-field-radios">
        <div className="form-field-radio-container">
          <input
            className={`form-field-radio ${extraInputClassName}`}
            type="radio"
            id={labelText}
            name={labelText}
            onChange={handleChange}
            value="In Stock"
          />
          <h5 className="form-field-radio-container--text">In Stock</h5>
        </div>

        <div className="form-field-radio-container">
          <input
            className={`form-field-radio ${extraInputClassName}`}
            type="radio"
            id={labelText}
            name={labelText}
            onChange={handleChange}
            value="Out of Stock"
          />
          <h5 className="form-field-radio-container--text">Out of Stock</h5>
        </div>
      </div>
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

export default ItemFormRadio;
