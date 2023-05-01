import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./WarehouseDetailsHeader.scss";

function WarehouseDetailsHeader() {
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const { warehouseId } = useParams();
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Take user back to previous page
  };

  // Make a GET request to obtain the details for a specific warehouse based on its ID
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then((response) => {
        if (response.status === 200) {
          setWarehouseDetails(response.data);
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  }, [warehouseId]); // Use warehouseId for dependency so this request is made if the warehouseId changes
  
  if (!warehouseDetails) {
    return <h1>This warehouse does not exist</h1>
  }

  return (
    <>
      <header className="warehouse-details-header">
        <div className="warehouse-details-header__left-container">
          <img
            className="warehouse-details-header__back-arrow"
            src={backArrow}
            alt="back arrow"
            onClick={handleClick}
          />
          <h1 className="warehouse-details-header__warehouse-name">
            {warehouseDetails.warehouse_name}
          </h1>
        </div>
        <Link
          to={`${pathname}/edit`}
        >
        <button className="warehouse-details-header__edit-button--mobile">
        </button>
        <button className="warehouse-details-header__edit-button">Edit</button>
        </Link>
      </header>
      <main className="warehouse-details">
        <div className="warehouse-details__address-container">
          <h2 className="warehouse-details__heading">WAREHOUSE ADDRESS:</h2>
          <p className="warehouse-details__info warehouse-details__address">{`${warehouseDetails.address}, ${warehouseDetails.city}, ${warehouseDetails.country}`}</p>
        </div>
        <div className="warehouse-details__contact-container">
          <div className="warehouse-details__contact-name-container">
            <h2 className="warehouse-details__heading">CONTACT NAME:</h2>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_name}
            </p>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_position}
            </p>
          </div>
          <div className="warehouse-details__contact-info-container">
            <h2 className="warehouse-details__heading">CONTACT INFORMATION:</h2>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_phone}
            </p>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_email}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetailsHeader;