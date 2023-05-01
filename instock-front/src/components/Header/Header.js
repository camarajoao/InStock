import "./Header.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";
import HeaderContainer from "./HeaderContainer/HeaderContainer";

function Header() {
  return (
    <div className="main-header">
      <Link to="/" className="main-header__logo--link">
        <img src={InStockLogo} className="main-header__logo" alt="InStock logo" />
      </Link>
      <HeaderContainer />
    </div>
  );
}

export default Header;
