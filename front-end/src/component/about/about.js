import React from "react";
import "./about.css";
import Rectangle88 from "../../image/Rectangle 88.png";
import Ellipse from "../../image/Ellipse 12.png";
import Long from "../../image/long.png";
import Trung from "../../image/trung.png";
import Thuy from "../../image/thuy.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function about() {
  return (
    <div className="div_about">
      <div className="div1">
        <h3 className="vechungtoi"> VỀ CHÚNG TÔI </h3>
        <p className="lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <img className="rectangle" src={Rectangle88} />
        <img className="ellipse" src={Ellipse} />
      </div>

      <div className="div2">
        <h3 className="thanhvien"> THÀNH VIÊN </h3>

        <table>
          <tr>
            <td className="col-1">
              <img className="img_long" src={Long} />
            </td>

            <td className="col-2">
              <img className="img_trung" src={Trung} />
            </td>

            <td className="col-3">
              <img className="img_thuy" src={Thuy} />
            </td>
          </tr>

          <tr>
            <td>
              <h4 className="name_long">PHẠM THIÊN LONG</h4>
            </td>
            <td>
              <h4 className="name_trung">PHAN NHẬT TRUNG</h4>
            </td>
            <td>
              <h4 className="name_thuy">ĐỖ THỊ MINH THÙY</h4>
            </td>
          </tr>

          <tr>
            <td>
              <a href="https://www.facebook.com">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com">
                <InstagramIcon />
              </a>
            </td>

            <td>
              <a href="https://www.facebook.com">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com">
                <InstagramIcon />
              </a>
            </td>

            <td>
              <a href="https://www.facebook.com">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com">
                <InstagramIcon />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default about;
