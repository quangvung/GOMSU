import React from "react";
import "./home.css";
import Gom1 from '../../image/gom1.png';

function home() {
  return (
    <div className="div_home">
      <div className="div1">
        <h1 className="h1_home">LÀNG SỐM</h1>
        <p className="p_home">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <button className="btn_home">BẮT ĐẦU</button>
      </div>

      <div className="div2">
        <section id="1">
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
        </section>
        <section id="2">
        <img className="img_gom1" src={Gom1} />
          <div>
            <h3 className="text_gomsubattrang">GỐM SỨ BÁT TRÀNG 2</h3>
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
        </section>

        <div className="pagination">
          <a class="active" href="#">1</a>
          <a class="active" href="#">2</a>
        </div>
        
      </div>
    </div>
  );
}

export default home;
