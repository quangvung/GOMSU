import React from "react";
import "./home.css";
import Gom1 from '../../image/gom1.png';

function home() {
  return (
    <div className="div_home">
      <section className="sec1">
        <h1 className="h1_home">LÀNG SỐM</h1>
        <p className="p_home">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <button className="btn_home">BẮT ĐẦU</button>
      </section>

      <section className="sec2">
        <div>
          <img className="img_gom1" src={Gom1} />
          <div>
            <h3 className="text_gomsubattrang">GỐM SỨ BÁT TRÀNG</h3>
            <p className ="p_sec2" >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>

            <div>
              <button className="btn_xemthem">
                XEM THÊM
              </button>
              <button className="btn_sanpham">
                XEM SẢN PHẨM
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
