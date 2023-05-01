import "./WarehouseListCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import InventoryModal from "../InventoryModal/InventoryModal";
import { useState } from "react";
import { Link } from "react-router-dom";




function WarehouseListCard({ id, name, category, status, quantity }) {
    const [show, setShow] = useState(false);

    const onClose = () => setShow(false)

    return (
      <li className="alt-inventory__listcard-item">
        <div className="inventory__listcard">
          <div className="alt-inventory__left-box-alt">
            <div className="alt-inventory__item-container-alt">
              <h2 className="alt-inventory__item">INVENTORY ITEM</h2>
              <div className="alt-inventory__item-link">
                <Link
                  to={`/inventory/${id}`}
                  className="alt-inventory__item-link"
                >
                  <div className="alt-inventory__text-link">{name}</div>
                  <img
                    className="alt-inventory__img-chevron"
                    src={chevronIcon}
                    alt="chevron icon"
                  />
                </Link>
              </div>
            </div>

            <div className="alt-inventory__category-container-alt">
              <h2 className="alt-inventory__category">CATEGORY</h2>
              <p className="alt-inventory__category-render">{category}</p>
            </div>
          </div>

          <div className="alt-inventory__middle-box-alt">
            <div className="alt-inventory__status-container-alt">
              <h2 className="alt-inventory__status">STATUS</h2>
              <div
                className={
                  status === "In Stock"
                    ? "alt-inventory__status-tag--in"
                    : "alt-inventory__status-tag--out"
                }
              >
                {status}
              </div>
            </div>
            <div className="alt-inventory__qty-container-alt">
              <h2 className="alt-inventory__qty">QTY</h2>
              <p className="alt-inventory__qty-count">{quantity}</p>
            </div>
          </div>

          <div className="alt-inventory__right-box-alt">
            <button
              className="alt-inventory__button"
              onClick={() => setShow(true)}
            >
              <img
                className="alt-inventory__delete"
                src={deleteIcon}
                alt="delete feature"
              />
            </button>
            <InventoryModal onClose={onClose} show={show} name={name} id={id} />
            <button className="alt-inventory__button">
              <Link to={`/inventory/${id}/edit`}>
                <img
                  className="alt-inventory__edit"
                  src={editIcon}
                  alt="delete feature"
                />
              </Link>
            </button>
          </div>
        </div>
      </li>
    );
}

export default WarehouseListCard;