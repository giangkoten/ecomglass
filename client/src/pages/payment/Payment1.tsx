import "./payment.css";
import { useSelector } from "react-redux";
import { formatMoney } from "../../helps/formatMoney";
import axios from "axios";

const Payment1 = () => {
  //Get All
  const listProductBuy = useSelector((state: any) => state.cart);
  //Tổng tiền
  const totalPrice = listProductBuy.reduce(
    (total: number, item: any) => total + item.price * item.numberBuy,
    0
  );
  const listCart = JSON.parse(localStorage.getItem("cart") as any);
  console.log(listCart);

  //Payment
  const handlePayment = () => {
    axios
      .post("http://localhost:8080/api/v1/order", listCart)
      .then(() => {
        localStorage.removeItem("cart");
      })
      .catch((err) => {
        console.log("Lỗi khi thanh toán: " + err);
      });
  };

  return (
    <>
      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2>Xác nhận đơn hàng và thanh toán</h2>
          <span>
            Vui lòng thanh toán, sau đó bạn có thể tận hưởng tất cả các tính
            năng và lợi ích.
          </span>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card p-3">
              <h6 className="text-uppercase">Chi tiết thanh toán</h6>
              <div className="inputbox mt-3">
                <input type="text" name="name" className="form-control" />
                <span>Tên chủ thẻ</span>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input type="text" name="name" className="form-control" />
                    <i className="fa fa-credit-card"></i>
                    <span>Số thẻ</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      <input type="text" name="name" className="form-control" />
                      <span>Hết hạn</span>
                    </div>
                    <div className="inputbox mt-3 mr-2">
                      <input type="text" name="name" className="form-control" />
                      <span>CVV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Địa chỉ thanh toán</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input type="text" name="name" className="form-control" />
                      <span>Địa chỉ nhà</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input type="text" name="name" className="form-control" />
                      <span>Quận, huyện</span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input type="text" name="name" className="form-control" />
                      <span>Thành phố</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input type="text" name="name" className="form-control" />
                      <span>Ghi chú</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-end">
              <button className="btn btn-success px-3" onClick={handlePayment}>
                Thanh toán
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span>Bạn phải trả</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">{formatMoney(totalPrice)}</h1>
              </div>
              <span>
                Tận hưởng tất cả các tính năng và đặc quyền sau khi bạn hoàn tất
                thanh toán
              </span>
              <a href="#" className="yellow decoration">
                Biết tất cả các tính năng
              </a>
              <div className="highlight">
                <span>Đảm bảo 100% hỗ trợ và cập nhật trong 1 năm tới.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment1;
