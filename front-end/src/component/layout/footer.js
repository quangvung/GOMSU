import React from "react";
import "./footer.css";
// rfce
import Logo_footer from "../../image/logolangsom4 1.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

function footer() {
  return (
    <div className="div_footer">
      <img className="logo_footer" src={Logo_footer} />

      <div>
        <h2 className="trang_chu">Trang chủ</h2>
        <h2 className="gioi_thieu">Giới thiệu</h2>
        <h2 className="lien_he">Liên hệ</h2>
        <h2 className="cua_hang">Cửa hàng</h2>
      </div>

      <div>
        <a href="https://www.instagram.com">
          <InstagramIcon className="ins" />
        </a>

        <a href="https://www.facebook.com/quangvungn">
          <FacebookIcon className="fb" />
        </a>

        <a href="https://www.linkedin.com/">
          <LinkedInIcon className="linkedin" />
        </a>

        <a href="https://www.youtube.com">
          <YouTubeIcon className="youtube" />
        </a>
      </div>

      <div>
        <h3 className="copyright">
          COPYRIGHT SITENAME. ALL RIGHTS RESERVED POWERED by CREATE ECOMMERCE
        </h3>
      </div>
    </div>
  );
}

export default footer;
