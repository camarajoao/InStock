import { useState, useEffect } from "react";
import axios from "axios";
import errorIcon from "../../../assets/Icons/error-24px.svg";
import "./WarehouseDropDown.scss";

function WarehouseDropDown({
  errorMessageClassName,
  extraInputClassName,
  labelText,
  state,
  setState,
}) {
  const [warehouseList, setWarehouseList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/warehouses").then((response) => {
      if (response.status === 200) {
        const axiosData = response.data;
        setWarehouseList(axiosData);
      }
    });
  }, []);
  const warehouseNames = warehouseList.map((element) => element.warehouse_name);
  const filteredWarehouseList = [...new Set(warehouseNames)];
  filteredWarehouseList.unshift("Please select");

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
        {filteredWarehouseList.map((warehouse_name, index) => (
          <option key={index} value={warehouse_name}>
            {warehouse_name}
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

export default WarehouseDropDown;
