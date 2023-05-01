import "./InventoryList.scss";
import InventoryListCard from "../../components/InventoryListCard/InventoryListCard";
import sortDefaultIcon from "../../assets/Icons/sort-24px.svg";

function InventoryList({ inventoryArray }) {
  return (
    <>
      <div className="inventory__category-selector--wider">
        <div className="inventory__left-box">
          <div className="inventory__toggle-inventory">
            <h2 className="inventory__selector">INVENTORY ITEM</h2>
            <button className="inventory__nav-button">
              <img
                className="inventory__img-selector"
                src={sortDefaultIcon}
                alt="sort default icon"
              />
            </button>
          </div>

          <div className="inventory__toggle-category">
            <h2 className="inventory__selector">CATEGORY</h2>
            <button className="inventory__nav-button">
              <img
                className="inventory__img-selector"
                src={sortDefaultIcon}
                alt="sort default icon"
              />
            </button>
          </div>
        </div>
        <div className="inventory__middle-box">
          <div className="inventory__toggle-status">
            <h2 className="inventory__selector">STATUS</h2>
            <button className="inventory__nav-button">
              <img
                className="inventory__img-selector"
                src={sortDefaultIcon}
                alt="sort default icon"
              />
            </button>
          </div>
          <div className="inventory__toggle-qty">
            <h2 className="inventory__selector">QTY</h2>
            <button className="inventory__nav-button">
              <img
                className="inventory__img-selector"
                src={sortDefaultIcon}
                alt="sort default icon"
              />
            </button>
          </div>
          <div className="inventory__toggle-warehouse">
            <h2 className="inventory__selector">WAREHOUSE</h2>
            <button className="inventory__nav-button">
              <img
                className="inventory__img-selector"
                src={sortDefaultIcon}
                alt="sort default icon"
              />
            </button>
          </div>
        </div>
        <div className="inventory__right-box">
          <div className="inventory__toggle-actions">
            <h2 className="inventory__selector-actions">ACTIONS</h2>
          </div>
        </div>
      </div>
      <div className="inventory__permutation">
        <ul className="inventory__outcome">
          {inventoryArray.map((item) => {
            return (
              <InventoryListCard
                key={item.id}
                id={item.id}
                name={item.item_name}
                warehouse={item.warehouse_name}
                category={item.category}
                status={item.status}
                quantity={item.quantity}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default InventoryList;
