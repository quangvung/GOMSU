import React from "react";
/* import "./contact.css"; */
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";

function contact() {
  return (
    <div>
      <div className="div1">
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
        <input type="text"/>
        <SearchIcon/>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31327.902619918972!2d106.3419904!3d11.039539199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2f2258bb158b%3A0xdeb15205bed4b626!2sGREEN%20Department%20Store%20at%20Hai%20Chau%20Market%20Crossroads!5e0!3m2!1sen!2s!4v1644486080698!5m2!1sen!2s"
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
