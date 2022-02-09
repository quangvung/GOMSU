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
        <div>
          <div className="col1">
            <img className="img_long" src={Long} />
            <h4 className="name_long">PHẠM THIÊN LONG</h4>
            <a href="https://www.facebook.com">
              <FacebookIcon className="fb_long"/>
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon className="ins_long"/>
            </a>
          </div>

          <div className="col2">
            <img className="img_trung" src={Trung} />
            <h4 className="name_trung">PHAN NHẬT TRUNG</h4>
            <a href="https://www.facebook.com">
                <FacebookIcon className="fb_trung"/>
              </a>
            <a href="https://www.instagram.com">
              <InstagramIcon className="ins_trung"/>
            </a>
          </div>

          <div className="col3">
            <img className="img_thuy" src={Thuy} />
            <h4 className="name_thuy">ĐỖ THỊ MINH THÙY</h4>
            <a href="https://www.facebook.com">
                <FacebookIcon className="fb_thuy"/>
            </a>
            <a href="https://www.instagram.com">
                <InstagramIcon className="ins_thuy"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
