import React from "react";
import "./home.css";
import Gom1 from "../../image/gom1.png";
import Nguocgoc from "../../image/nguongoc.png";
import Taylor from "../../image/taylor-heery-ZSgWcW70cTs-unsplash 1.png";
import Zp5 from "../../image/ZP52XfZ.png";
import Dacdiem from "../../image/dacdiem.png";
import Rectangle45 from "../../image/rectangle45.png";
import Rectangle46 from "../../image/rectangle46.png";
import Rectangle48 from "../../image/rectangle48.png";
import Rectangle49 from "../../image/rectangle49.png";
import Arrowright from "../../image/arrow-right.png";

/* import Iconarrow from "../../image/angle-arrow-down_icon-icons.com_73683.png";
 */
/* import {ArrowForwardIosIcon} from "@mui/icons-material/ArrowForwardIos";
import {ArrowBackIosIcon} from "@mui/icons-material/ArrowBackIos"; */

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
        <div>
          <div>
            {/*           <svg className="account_circle" data-testid={ArrowForwardIosIcon}></svg>
             */}{" "}
          </div>
          <div>
            <section id="1">
              <img className="img_gom1" src={Gom1} />
              <div>
                <h3 className="text_gomsubattrang">GỐM SỨ BÁT TRÀNG</h3>
                <p className="p_sec2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>

                <div>
                  <button className="btn_xemthem">XEM THÊM</button>
                  <button className="btn_sanpham">XEM SẢN PHẨM</button>
                </div>
              </div>
            </section>
            <section id="2">
              <img className="img_gom1" src={Gom1} />
              <div>
                <h3 className="text_gomsubattrang">GỐM SỨ BÁT TRÀNG 2</h3>
                <p className="p_sec2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>

                <div>
                  <button className="btn_xemthem">XEM THÊM</button>
                  <button className="btn_sanpham">XEM SẢN PHẨM</button>
                </div>
              </div>
            </section>
          </div>

          <div>
            {/*          <svg className="account_circle" data-testid={ArrowBackIosIcon}></svg> */}
          </div>
        </div>

        <div className="pagination">
          <a href="#">1</a>
          <a href="#">2</a>
        </div>
      </div>

      <div className="div3">
        <div>
          <h3 className="nguongoc">NGUỒN GỐC</h3>

          <p className="p_nguongoc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book
          </p>

          <button className="btn_xemthem">XEM THÊM</button>
        </div>

        <div>
          <img className="img_nguocgoc" src={Nguocgoc} />
        </div>
      </div>

      <div className="div4">
        <div>
          <img className="img_taylor" src={Taylor} />
        </div>
        <div>
          <p className="taylor">
            Phường Bát Tràng 社鉢場 là tên gọi cũ của làng gốm sứ Bát Tràng
            thuộc quận Gia Lâm, Hà Nội trong khoảng trước năm 1945. Trước đây
            hơn 700 năm, người dân thôn Bát Tràng thiên di từ làng tình nhân Bát
            xã người tình Xuyên và trang Bạch Bát thuộc tổng Bạch Bát, quận yên
            Mô, phủ Trường yên ổn , trấn Thanh Hóa ngoại, nay là 2 thôn của phố
            yên ổnThành, huyện im Mô, tỉnh Ninh Bình, theo vua Lý Công Uẩn rời
            đô trong khoảng Hoa Lư ra Thăng Long, đến vùng đất bồi trên bờ sông
            Hồng, lập phố khiến cho nghề gốm gạch xây dựng; lúc đầu thôn Bát
            Tràng được gọi là Bạch Thổ phố , thị trấn Bát Tràng tức làng Bát
            Tràng hiện tại thuộc tổng Đông Dư, huyện Gia Lâm, phủ Thuận An, thức
            giấc Bắc Ninh sinh sống cốt bằng nghề làm gốm sứ và buôn bán và làm
            quan. . Năm 1948, xãBát Tràng nhập sở hữu phố Giang Cao và phường
            Kim Lan lập thành thị trấn quang quẻ Minh. từ năm 1964, xã Bát Tràng
            được có mặt trên thị trường gồm hai thôn Bát Tràng và Giang Cao như
            hiện. Gốm sứ bát tràng luôn mang một vị trí trong những người dùng
            trong nước cũng như ngoaifi nước bởi sở hữu nhiều ưu chấm.
          </p>
        </div>
      </div>

      <div className="div5">
        <div>
          <p className="p_zp5">
            Hiện, sản phẩm gốm sứ Bát Tràng ngày một phong phú và phổ biến .
            Ngoài các mặt hàng truyền thống, các lò gốm sứ Bát Tràng lâu đời còn
            sinh sản nhiều sản phẩm gốm sứ Bát Tràng cao cấp mới đáp ứng yêu cầu
            tiêu dùng trong Việt Nam như cácloại ấm chén, bát đĩa, lọ hoa… kiểu
            mới, các nguyên liệu xây dựng , các mẫu sứ phương pháp điện… và
            những sản phẩm xuất khẩu theo đơn đặt hàng của nước ngoài. Sản phẩm
            Bát Tràng ra đời cả nước và được xuất khẩu sang phổ thông nước châu
            Á, châu Âu. Bát Tràng suýt nhiều nhân lực từ khắp nơi về sáng tác
            mẫu mã mới và cải tiến kỹ thuật chế tác . một số nghệ nhân đã bước
            đầu thành công trong việc khôi phục một số đồ gốm cổ sở hữu những
            ngoại hình và nước men đặc sắc thời Lý, è cổ, Lê, Mạc…Sau năm 1986
            làng gốm sứ Bát Tràng mang sự chuyển biến totheo hướngkinh tế thị
            phần . những cộng tác phố lần lượt giải thể hoặc chuyển thành công
            ty cổ phần, những doanh nghiệp tođược có mặt trên thị trường nhưng
            vẫn còn còn đó phổ biến tổ phân phối và đa dạng là các công ty sản
            xuất nhỏ theo hộ gia đình. phố Bát Tràng nay đã trở nên một trung
            tâm gốm lớn.
          </p>

          {/*           <img className="iconarrow" src={Iconarrow} /> */}
        </div>

        <div>
          <img className="img_zp5" src={Zp5} />
        </div>
      </div>

      <div className="div6">
        <div>
          <img className="img_dacdiem" src={Dacdiem} />
        </div>
        <div>
          <h3 className="dacdiem"> ĐẶC ĐIỂM </h3>

          <p className="p_dacdiem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book
          </p>

          <button className="btn_xemthem1">XEM THÊM</button>
        </div>
      </div>

      <div className="div7">
        <h3 className="hinhanh"> HÌNH ẢNH </h3>

          <div>
            <img classname="rectangle45" src={Rectangle45} />
          
            <img classname="rectangle46" src={Rectangle46} />
          
            <img classname="rectangle48" src={Rectangle48} />
        
            <img classname="rectangle49" src={Rectangle49} />

            <div>
            <img classname="arrowright" src={Arrowright} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default home;
