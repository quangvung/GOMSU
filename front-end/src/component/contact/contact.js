import React from "react";
/* import "./contact.css"; */
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";

function contact() {
  return (
    <div>
      <div classname="div1">
        <p>
          Trụ sở chính: 214 Vạn Kiếp, phường 3, quận Bình Thạnh, TPHCM Email:
          langsomvn@gmail.com Website: langsomvn.com Khung giờ làm việc: 8h30 -
          21h30 Hotline: 19001080
        </p>
        <a href="https://www.youtube.com">
          <YouTubeIcon className="youtube" />
        </a>
        <a href="https://www.facebook.com/quangvungn">
          <FacebookIcon className="fb" />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className="ins" />
        </a>
      </div>

      <div className="div2">
        <input type="text">Tìm địa chỉ chi nhánh gần bạn</input>
        <SearchIcon className="" />

        
      </div>
    </div>
  );
}

export default contact;
