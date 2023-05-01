import errorIcon from "../../../assets/Icons/error-24px.svg";
import "./ItemFormTextArea.scss";

function ItemFormTextArea({
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
      <textarea
        className={`form-field-textarea ${extraInputClassName}`}
        type="text"
        id={labelText}
        name={labelText}
        placeholder="Please enter a brief item description..."
        onChange={handleChange}
        value={state}
      ></textarea>
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

export default ItemFormTextArea;
