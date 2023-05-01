import { Link } from "react-router-dom";
import "./WarehouseListHeader.scss";

import searchIcon from "../../../assets/Icons/search-24px.svg";

export default function WarehouseListHeader() {

    return (
      <div className="wh-header">
        <h1 className="wh-header__title">Warehouses</h1>
        <div className="wh-header__container">
          <div className="wh-header__search">
            <input className="wh-header__search-input" placeholder="Search" />
            <button className="wh-header__search-icon" type="submit">
              <img
                src={searchIcon}
                className="wh-header__search-icon--height"
                alt="search-icon"
              />
            </button>
          </div>
          <Link to={"/warehouses/add"}>
            <button className="wh-header__button" type="submit">
              + Add New Warehouse
            </button>
          </Link>
        </div>
      </div>
    );
}