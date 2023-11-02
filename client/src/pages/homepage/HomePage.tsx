import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import anh1 from "./anh1.jpg";
import "./homePage.css";
import ModalGlass from "../../commons/ModalGlass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  const id = JSON.parse(localStorage.getItem("idUser") as any);

  const [openModal, setOpenModal] = useState(false);

  const handleShowModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <div>
        {openModal && <ModalGlass handleCloseModal={handleCloseModal} />}{" "}
        <div>
          <Carousel interval={1000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://kinhmatanna.com/wp-content/uploads/2023/02/Untitled-3-01-1-2048x665.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://kinhmatanna.com/wp-content/uploads/2023/08/Cover-fanpage-resize-02-2048x665.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://kinhmatanna.com/wp-content/uploads/2023/02/Untitled-3-02-1-2048x665.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="image-container">
          <img
            className="home-anh1"
            src="https://kinhmatanna.com/wp-content/uploads/2023/04/261kb-1536x964.jpg"
            alt=""
          />
          <img
            className="home-anh2"
            src="https://kinhmatanna.com/wp-content/uploads/2023/04/Untitled-4-01-01-02-768x983.jpg"
            alt=""
          />
          <img
            className="home-anh2"
            src="https://i.pinimg.com/564x/34/7d/4a/347d4ad09350ba7ea04307224dc0148b.jpg"
            alt=""
          />
        </div>
        <div className="list-all">
          <div className="list-product">
            <div className="list-trend">
              <span className="list-hot">HOT TREND</span> <br />
              <span className="list-new">HÀNG MỚI LÊN KỆ</span>
            </div>
            <div className="list-card">
              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-11_1-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 800NC005
                  </Card.Title>
                  <Card.Text>720,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-195-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 800NC004
                  </Card.Title>
                  <Card.Text>720,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-225-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 800NC003
                  </Card.Title>
                  <Card.Text>720,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-243-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 800NC001
                  </Card.Title>
                  <Card.Text>720,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_3955-copy-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 380CK134
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 380CK116
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4017-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 380CK124
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4082-copy-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 380CK118
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_3975-copy-1-Copy-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 380CK113
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "15rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_3988-copy-1-300x300.jpg"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    GK – 380CK132
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <button className="xem">Xem tất cả </button>
          </div>
        </div>
        <div className="container-pit">
          <div className="Choose-Glass">
            <span className="elementor" onClick={handleShowModal}>
              Chọn kính online
            </span>
          </div>{" "}
          <br />
          <div className="FIT-BG">
            {" "}
            <span className="FIT">Tìm kính phù hợp</span>
          </div>
          <div className="container-khung">
            <div className="image-pit">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2022/10/310399478_2061890187342925_5141986880618101888_n-1536x1536.jpg"
                alt=""
                className="image-khung"
              />
            </div>
            <div className="text-container">
              <div className="title-choose-img">
                <img
                  src="https://kinhmatanna.com/wp-content/uploads//2022/07/g2.svg"
                  alt=""
                  style={{
                    width: "40px",
                    objectFit: "cover",
                    marginTop: "25px",
                  }}
                />
              </div>
              <h2 className="title-khung">Kích thước khung</h2>
              <p className="description-khung">
                Lựa chọn Kích thước khung phù hợp nhất để giúp dễ dàng vừa vặn,
                thoải mái và tiện lợi cho bạn.
              </p>
            </div>
          </div>
          <div className="container-khung">
            <div className="text-container">
              <div className="title-choose-img">
                <img
                  src="https://kinhmatanna.com/wp-content/uploads//2022/07/g1.svg"
                  alt=""
                  style={{
                    width: "50px",
                    objectFit: "cover",
                    marginTop: "25px",
                  }}
                />
              </div>
              <h2 className="title-khung">Đo ống kính</h2>
              <p className="description-khung">
                Chúng tôi sẽ giới thiệu các loại ống kính tốt nhất dựa trên đơn
                thuốc của bạn. Để đặt mua kính, bạn cũng sẽ cần Khoảng cách đồng
                tử (PD).
              </p>
            </div>
            <div className="image-pit">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-37.jpg"
                alt=""
                className="image-khung"
              />
            </div>
          </div>
        </div>
        <div className=" container-add">
          <div className="addressss">
            <div>
              <span className="elementor">Địa điểm</span>
              <br />
              <span className="FIT">HỆ THỐNG CỬA HÀNG</span>
            </div>
            <button>
              <i className="fa-solid fa-location-dot"></i> Tìm kiếm cơ sở
            </button>
          </div>
          <div className="image-add">
            <img
              className="large-image"
              src="https://kinhmatanna.com/wp-content/uploads/2022/10/Untitled-1.png"
              alt=""
            />
            <img
              className="small-image"
              src="https://kinhmatanna.com/wp-content/uploads/2022/10/756daa592822ed7cb433-768x1365.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="container-text">
          <div>
            <div className="container-text1">
              <div className="container-text2">
                <h2>Vũ trụ truyền thông</h2>
                <p>
                  Kính mắt Anna chắc không còn quá xa lạ với giới trẻ nữa. Đây
                  là kênh thông tin mua sắm và giải trí dành cho giới trẻ, là
                  “món ăn tinh thần” hằng ngày không thể thiếu của mỗi người
                  trẻ.
                </p>
                <p>
                  Được thành lập từ năm 2015, trải qua hơn 8 năm phát triển kính
                  mắt Anna đã, đang và sẽ chiếm vị trí không thể thiếu đối với
                  các bạn trẻ. Cập nhật thông tin thời trang nhanh chóng và phù
                  hợp với thị hiếu của khán giả thông qua các mạng xã hội như
                  Facebook, Tiktok, Instagram, Youtube, kính mắt Anna là lựa
                  chọn hàng đầu cho những ai muốn tận hưởng các bài viết, video
                  vừa mang tính giải trí mà vẫn có đầy đủ thông tin cần thiết.
                </p>
              </div>
              <div className="container-text3">
                <img src={anh1} alt="heghe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
