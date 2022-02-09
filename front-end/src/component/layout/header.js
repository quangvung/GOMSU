import React from "react";
import Logo from "../../image/logolangsom4 1.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./header.css";

function header() {
  return (
    <div className="div_header">
      <img className="img_logo" src={Logo} />

      <h2 className="trang_chu">Trang chủ</h2>
      <h2 className="gioi_thieu">Giới thiệu</h2>
      <h2 className="lien_he">Liên hệ</h2>
      <h2 className="cua_hang">Cửa hàng</h2>

      <div>
        <ShoppingCartIcon className="" />

        <AccountCircleIcon className="" />
      </div>
    </div>
  );
}

export default header;
