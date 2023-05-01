import "./WarehouseSorter.scss";

import sortIcon from "../../../assets/Icons/sort-24px.svg";

export default function WarehouseSorter() {
    return (
        <div className="sorter">
            <div className="sorter__container-left">
                <div className="sorter__heading sorter__warehouse">
                    <span className="sorter__text">
                        <p className="sorter__text-p">WAREHOUSE</p>
                    </span>
                    <button className="sorter__icon">
                        <img src={sortIcon} className="sorter__icon-icon" alt="sort-icon" />
                    </button>
                </div>

                <div className="sorter__heading sorter__address">
                    <span className="sorter__text">
                        <p className="sorter__text-p">ADDRESS</p>
                    </span>
                    <button className="sorter__icon">
                        <img src={sortIcon} className="sorter__icon-icon" alt="sort-icon" />
                    </button>
                </div>
            </div>
            <div className="sorter__container-right">
                <div className="sorter__heading sorter__contact-name">
                    <span className="sorter__text">
                        <p className="sorter__text-p">CONTACT NAME</p>
                    </span>
                    <button className="sorter__icon">
                        <img src={sortIcon} className="sorter__icon-icon" alt="sort-icon" />
                    </button>
                </div>

                <div className="sorter__heading sorter__contact-info">
                    <span className="sorter__text">
                        <p className="sorter__text-p">CONTACT INFORMATION</p>
                    </span>
                    <button className="sorter__icon">
                        <img src={sortIcon} className="sorter__icon-icon" alt="sort-icon" />
                    </button>
                </div>
            </div>
            <div className="sorter__heading sorter__actions">
                <p className="sorter__text-p">ACTIONS</p>
            </div>
        </div>
    )
}

