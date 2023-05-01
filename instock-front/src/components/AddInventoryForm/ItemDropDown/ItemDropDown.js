import { useState, useEffect } from "react";
import axios from "axios";
import errorIcon from "../../../assets/Icons/error-24px.svg";
import "./ItemDropDown.scss";

function ItemDropDown({
  errorMessageClassName,
  extraInputClassName,
  labelText,
  state,
  setState,
}) {
  const [inventoryList, setInventoryList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/inventory").then((response) => {
      if (response.status === 200) {
        const axiosData = response.data;
        setInventoryList(axiosData);
      }
    });
  }, []);
  const categoryList = inventoryList.map((element) => element.category);
  const filteredCategoryList = [...new Set(categoryList)];
  filteredCategoryList.unshift("Please select");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="form-field-container">
      <label className="form-field-label" htmlFor={labelText}>
        {labelText}
      </label>
      <select
        className={`form-field-input ${extraInputClassName}`}
        value={state}
        onChange={handleChange}
      >
        {filteredCategoryList.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

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

export default ItemDropDown;
