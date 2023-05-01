import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sortDefaultIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseListCard from "../WarehouseListCard/WarehouseListCard";
import "./WarehouseDetailsInventory.scss";

function WarehouseDetailsInventory() {
    const [warehouseInventory, setWarehouseInventory] = useState(null);
    const { warehouseId } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/warehouses/${warehouseId}/inventories`)
            .then((response) => {
                if (response.status === 200) {
                    setWarehouseInventory(response.data);
                }
            })
            .catch((error) => {
                return <h2>{error.message}</h2>;
            });
    }, [warehouseId]);


    if (!warehouseInventory) {
        return (
          <>
            <div className="inventory__exist-message--mobile">
              No inventory exists for this warehouse
            </div>
            <div className="inventory__category-selector--wider">
              <div className="inventory__left">
                <div className="inventory__toggle">
                  <h2 className="inventory__selector">INVENTORY ITEM</h2>
                  <img
                    className="inventory__img-selector"
                    src={sortDefaultIcon}
                    alt="sort default icon"
                  />
                </div>
                <div className="inventory__toggle">
                  <h2 className="inventory__selector">CATEGORY</h2>
                  <img
                    className="inventory__img-selector"
                    src={sortDefaultIcon}
                    alt="sort default icon"
                  />
                </div>
              </div>
              <div className="inventory__middle">
                <div className="inventory__toggle">
                  <h2 className="inventory__selector">STATUS</h2>
                  <img
                    className="inventory__img-selector"
                    src={sortDefaultIcon}
                    alt="sort default icon"
                  />
                </div>
                <div className="inventory__toggle">
                  <h2 className="inventory__selector">QTY</h2>
                  <img
                    className="inventory__img-selector"
                    src={sortDefaultIcon}
                    alt="sort default icon"
                  />
                </div>
              </div>
              <div className="inventory__right">
                <div className="inventory__toggle">
                  <h2 className="inventory__selector">ACTIONS</h2>
                </div>
              </div>
              <div className="inventory__exist-message">
                No inventory exists for this warehouse
              </div>
            </div>
          </>
        );
    }

    if (warehouseInventory) {
        return (
            <>
                <div className="inventory__category-selector--wider">
                    <div className="inventory__left">
                        <div className="inventory__toggle-alt inventory__toggle-alt-item">
                            <h2 className="inventory__selector">INVENTORY ITEM</h2>
                            <img
                                className="inventory__img-selector"
                                src={sortDefaultIcon}
                                alt="sort default icon"
                            />
                        </div>
                        <div className="inventory__toggle-alt inventory__toggle-alt-category">
                            <h2 className="inventory__selector">CATEGORY</h2>
                            <img
                                className="inventory__img-selector"
                                src={sortDefaultIcon}
                                alt="sort default icon"
                            />
                        </div>
                    </div>
                    <div className="inventory__middle">
                        <div className="inventory__toggle-alt inventory__toggle-alt-status">
                            <h2 className="inventory__selector">STATUS</h2>
                            <img
                                className="inventory__img-selector"
                                src={sortDefaultIcon}
                                alt="sort default icon"
                            />
                        </div>
                        <div className="inventory__toggle-alt inventory__toggle-alt-qty">
                            <h2 className="inventory__selector">QUANTITY</h2>
                            <img
                                className="inventory__img-selector"
                                src={sortDefaultIcon}
                                alt="sort default icon"
                            />
                        </div>
                    </div>
                    <div className="inventory__right">
                        <div className="inventory__toggle-alt inventory__toggle-alt-actions">
                            <h2 className="inventory__selector">ACTIONS</h2>
                        </div>
                    </div>
                </div>
                <div className="inventory__permutation">
                    <ul className="inventory__outcome">
                        {warehouseInventory.map((item) => {
                            return (
                                <WarehouseListCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.item_name}
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
}

export default WarehouseDetailsInventory;
