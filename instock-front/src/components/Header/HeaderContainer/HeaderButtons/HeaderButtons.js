import React from "react";
import { Link } from "react-router-dom";
import "./HeaderButtons.scss";

export default function HeaderButtons({ isWarehouse, isInventory }) {

  return (
    <div className="header-buttons-container">
      <Link
        to="/warehouses"
        className="header-button-container header-button-container--left"
      >
        <button
          className={`header-button-container__button header-button-container__button--left ${
            isWarehouse ? "header-button-container__button--active" : ""
          }`}
        >
          Warehouses
        </button>
      </Link>
      <Link 
        to="/inventory"
        className="header-button-container"
      >
        <button
          className={`header-button-container__button header-button-container__button--right ${
            isInventory ? "header-button-container__button--active" : ""
          }`}
        >
          Inventory
        </button>
      </Link>
    </div>
  );
}
