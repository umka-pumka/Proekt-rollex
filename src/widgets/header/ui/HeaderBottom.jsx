import React from "react";
import logo from "../../../shared/assets/logo.png";
import Search from "./Search";
import { BiCart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
const HeaderBottom = () => {
  const navigate = useNavigate();
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  return (
    <div className="header_bottom">
      <img src={logo} alt="PORTEN Logo" />
      <div className="nav">
        <NavMenu />
        <div className="header-icons">
          <div className="cart-icon-container" onClick={() => navigate(`/cart`)}>
            <BiCart className="iconCard" />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>
          <div className="cart-icon-container" onClick={() => navigate(`/favorites`)}>
            <FaRegHeart className="iconCard" />
            {favoritesCount > 0 && <span className="cart-count">{favoritesCount}</span>}
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
