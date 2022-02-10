import React from "react";
/* import "./signup.css"; */
import Avt from "../../image/Rectangle 80.png";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
/* import GoogleIcon from "@material-ui/icons/Google";
 */import CropSquareIcon from "@material-ui/icons/CropSquare";
import FacebookIcon from "@material-ui/icons/Facebook";


function signup() {
  return (
    <div className="div_signup">
      <div className="div1">
        <img className="avt" src={Avt} />
      </div>

      <div className="div2">
        <h3 className="dangky">ĐĂNG KÝ</h3>

        <input type="tentk" className="tentaikhoan" />
        <EmailIcon className="email" />
        <input type="password" className="matkhau" />
        <VisibilityOffIcon className="visibilityoff" />
        <input type="hidden" className="nhaplaimatkau" />
        <VisibilityIcon className="visibility" />
      </div>

      <div className="div3">
        <h3 className="hoac"> HOẶC </h3>
        {/* <a href="https://www.google.com">
          <GoogleIcon className="google" />
  </a> */}
        <a href="https://www.facebook.com">
          <FacebookIcon className="fb" />
        </a>
        <CropSquareIcon className="vuong" />
        <p className="text">Tôi đồng ý điều khoản sử dụng dịch vụ</p>
        <h3 className="taotaikhoan">TẠO TÀI KHOẢN</h3>
      </div>
    </div>
  );
}

export default signup;
