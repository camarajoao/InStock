import "./InventoryListHeader.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import { Link } from "react-router-dom";

export default function InventoryListHeader() {
    return (
      <div className="wh-header">
        <h1 className="wh-header__title">Inventory</h1>
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
          <Link to="/inventory/add">
            <button className="wh-header__button" type="submit">
              + Add New Item
            </button>
          </Link>
        </div>
      </div>
    );
}

