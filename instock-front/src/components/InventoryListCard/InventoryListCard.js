import { useState } from "react";
import { Link } from "react-router-dom";
import "./InventoryListCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import InventoryModal from "../InventoryModal/InventoryModal";


function InventoryListCard({ id, name, warehouse, category, status, quantity }) {

    const [show, setShow] = useState(false);

    const onClose = () => setShow(false)

    return (
      <li>
        <div className="inventory__listcard">
          <div className="inventory__left-box">
            <div className="inventory__item-container">
              <h2 className="inventory__item">INVENTORY ITEM</h2>
              <div className="inventory__item-link">
                <Link
                  to={`/inventory/${id}`}
                  className="inventory__item-link"
                >
                  <div className="inventory__text-link">{name}</div>
                  <img
                    className="inventory__img-chevron"
                    src={chevronIcon}
                    alt="chevron icon"
                  />
                </Link>
              </div>
            </div>
            <div className="inventory__category-container">
              <h2 className="inventory__category">CATEGORY</h2>
              <p className="inventory__category-render">{category}</p>
            </div>
          </div>
          <div className="inventory__middle-box">
            <div className="inventory__status-container">
              <h2 className="inventory__status">STATUS</h2>
              <div
                className={
                  status === "In Stock"
                    ? "inventory__status-tag--in"
                    : "inventory__status-tag--out"
                }
              >
                {status}
              </div>
            </div>
            <div className="inventory__qty-container">
              <h2 className="inventory__qty">QTY</h2>
              <p className="inventory__qty-count">{quantity}</p>
            </div>
            <div className="inventory__warehouse-container">
              <h2 className="inventory__warehouse">WAREHOUSE</h2>
              <p className="inventory__warehouse-render">{warehouse}</p>
            </div>
          </div>
          <div className="inventory__right-box">
            <button
              className="inventory__button-delete"
              onClick={() => setShow(true)}
            >
              <img
                className="inventory__delete"
                src={deleteIcon}
                alt="delete feature"
              />
            </button>
            <InventoryModal onClose={onClose} show={show} name={name} id={id} />
            <button className="inventory__button-edit">
              <Link to={`/inventory/${id}/edit`}>
                <img
                  className="inventory__edit"
                  src={editIcon}
                  alt="edit icon"
                />
              </Link>
            </button>
          </div>
        </div>
      </li>
    );
}

export default InventoryListCard;