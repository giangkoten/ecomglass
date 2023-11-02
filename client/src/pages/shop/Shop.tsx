import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./shop.css";
import axios from "axios";
import { formatMoney } from "../../helps/formatMoney";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // Option
  const material = [
    { text: "Aceta", value: 1 },
    { text: "Kim loại", value: 2 },
    { text: "Nhựa dẻo", value: 3 },
  ];
  const style = [
    { text: "Hình vuông", value: 1 },
    { text: "Mắt mèo", value: 2 },
    { text: "Oval", value: 3 },
  ];

  const [materialOption, setMaterialOption] = useState("");
  const [styleOption, setStyleOption] = useState("");
  //Glass
  interface Glass {
    glassId: number;
    glassName: String;
    glassPrice: number;
    glassSale: number;
    img1: string;
  }
  const [glasses, setGlasses] = useState<Glass[]>([]);
  const loadGlass = () => {
    if (materialOption == "" && styleOption == "") {
      axios
        .get(`http://localhost:8080/api/v1/shop/glasses`)
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else if (styleOption == "" && materialOption != "") {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyMaterial=${materialOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else if (styleOption != "" && materialOption == "") {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyStyle=${styleOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyStyle=${styleOption}&keyMaterial=${materialOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    loadGlass();
  }, [styleOption, materialOption]);

  // Detail
  const handleDetail = (id: number) => (
    navigate(`/detail/${id}`),
    window.scroll({
      top: 0,
    })
  );
  return (
    <>
      <Header />
      <div>
        {" "}
        <div className="shop-product">
          <h1>Sản phẩm</h1>
        </div>
        <div className="shop-text">
          <h2>Gọng kính</h2>
          <p>
            Gọng kính được xem như bộ khung vững chắc, là giá đỡ vững chắc cho
            mắt kính. Không những thế, các loại gọng kính còn được thiết kế như
            là một phụ kiện thời trang hấp dẫn giúp chủ sở hữu nổi bần bật, thu
            hút mọi ánh nhìn.
          </p>
        </div>
        <div className="row">
          <div className="col-2">
            <h3>Chất liệu</h3>
            <ul>
              {material.map((e, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    value={e.value}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMaterialOption(e.target.value);
                      } else {
                        setMaterialOption("");
                      }
                    }}
                  />
                  {e.text}
                </li>
              ))}
            </ul>

            <h3>Hình dáng</h3>
            <ul>
              {style.map((e, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    value={e.value}
                    onChange={(e) => setStyleOption(e.target.value)}
                  />
                  {e.text}
                </li>
              ))}
            </ul>
            <h3>Khoảng giá</h3>
            <ul>
              <li>
                <input type="checkbox" />
                100.000đ - 200.000đ
              </li>
              <li>
                <input type="checkbox" />
                300.000đ - 500.000đ
              </li>
              <li>
                <input type="checkbox" />
                600.000đ
              </li>
            </ul>
          </div>
          <div className="col-10" style={{ width: "80%" }}>
            <div className="shop-kinhs">
              <ul className="shop-product1">
                {glasses.length > 0 &&
                  glasses.map((e: Glass, i) => (
                    <li className="shop-product2" key={i}>
                      <div className="addimg" style={{ position: "relative" }}>
                        <img className="" src={e.img1} alt="" />
                        <p className="addtocart">
                          <i
                            style={{ fontSize: "20px" }}
                            className="fa-solid fa-cart-shopping"
                          ></i>
                        </p>
                        <p className="sale">SALE</p>
                      </div>

                      <br />
                      <span
                        className="shop-product3"
                        onClick={() => handleDetail(e.glassId)}
                      >
                        {e.glassName}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <s className="shop-product4">
                          {formatMoney(e.glassPrice)}
                        </s>
                        <span
                          className="shop-product4"
                          style={{
                            color: "red",
                            fontWeight: "bolder",
                            fontStyle: "italic",
                          }}
                        >
                          {formatMoney(e.glassPrice * (1 - e.glassSale))}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="product-carousel">
          <h1>Sản phẩm nổi bật</h1>
          <Slider {...settings}>
            <div className="product-carousel1">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-195-1-300x300.jpg"
                alt=""
              />
              <br />
              <span className="shop-product3">GK – 800NC004</span>
              <br />
              <span className="shop-product4">720,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-225-1-300x300.jpg"
                alt=""
              />
              <br />
              <span className="shop-product3">GK – 800NC003</span>
              <br />
              <span className="shop-product4">720,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-243-1-300x300.jpg"
                alt=""
              />
              <br />
              <span className="shop-product3">GK – 800NC001</span>
              <br />
              <span className="shop-product4">720,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_3955-copy-1-300x300.jpg"
                alt=""
              />
              <br />
              <span className="shop-product3">GK – 380CK134</span>
              <br />
              <span className="shop-product4">342,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-11_1-1-300x300.jpg"
                alt=""
              />
              <br />
              <span className="shop-product3">GK – 800NC005</span>
              <br />
              <span className="shop-product4">720,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2022/07/kinhmatanna-20201215191522.jpg"
                alt=""
              />
              <br />
              <span className="shop-product3">GK – 0123459</span>
              <br />
              <span className="shop-product4">356,000₫</span>
            </div>
            <div className="product-carousel1">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2023/02/12388..-768x768.jpg"
                alt=""
              />
              <br />
              <span className="shop-product3">GK – 280CN023</span>
              <br />
              <span className="shop-product4">252,000₫</span>
            </div>
          </Slider>
        </div>
        <div style={{ padding: " 0% 5%", marginBottom: "6%" }}>
          <div className="product-one">
            <h1>SẢN PHẨM MỚI NHẤT</h1>
            <div className="" style={{ display: "flex", gap: "23%" }}>
              <div style={{ width: "15%" }}>
                <img
                  className="product-img"
                  src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-416.jpg"
                  alt=""
                />
              </div>
              <div style={{ width: "61%" }}>
                <Slider {...settings1}>
                  <div className="product-new1">
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-195-1-300x300.jpg"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 800NC004</span>
                    <br />
                    <span className="shop-product4">720,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-225-1-300x300.jpg"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 800NC003</span>
                    <br />
                    <span className="shop-product4">720,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-243-1-300x300.jpg"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 800NC001</span>
                    <br />
                    <span className="shop-product4">720,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_3955-copy-1-300x300.jpg"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 380CK134</span>
                    <br />
                    <span className="shop-product4">342,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-11_1-1-300x300.jpg"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 800NC005</span>
                    <br />
                    <span className="shop-product4">720,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads/2022/07/kinhmatanna-20201215191522.jpg"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 0123459</span>
                    <br />
                    <span className="shop-product4">356,000₫</span>
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads/2023/02/12388..-768x768.jpg"
                      alt=""
                    />
                    <br />
                    <span className="shop-product3">GK – 280CN023</span>
                    <br />
                    <span className="shop-product4">252,000₫</span>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
