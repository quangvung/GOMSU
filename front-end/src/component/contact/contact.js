import React from "react";
import "./contact.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";

function contact() {
  return (
    <div className="div_contact">
      <div className="div1">
        <p className="p_text">
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
        <input type="text" className="search" />
        <SearchIcon />

        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />

     
       

      </div>
    </div>
  );
}

export default contact;
