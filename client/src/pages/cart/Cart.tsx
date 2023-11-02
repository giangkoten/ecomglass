import { InputNumber } from "antd";
import "./cart.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { formatMoney } from "../../helps/formatMoney";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { formatDate } from "../../helps/formatDate";

const Cart = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem("cart") as any) || [];
  useEffect(() => {
    if (cart.length > 0) {
      dispatch({ type: "GETLOCAL", payload: cart });
    }
  }, []);
  //Get All
  let listProductBuy = useSelector((state: any) => state.cart);

  //Tổng tiền
  const totalPrice = listProductBuy.reduce(
    (total: number, item: any) => total + item.price * item.numberBuy,
    0
  );
  // Xóa
  const handleDelete = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { detailId: id } });

    const listNewCart = cart.filter((e: any) => e.detailId != id);
    if (listNewCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify([...listNewCart]));
    }
  };
  //Update
  const handleUpdate = (id: number, updatedValue: number) => {
    dispatch({
      type: "UPDATE_FROM_CART",
      payload: { detailId: id, numberBuy: updatedValue },
    });
    const newCart = cart.find((e: any) => e.detailId == id);

    if (newCart) {
      newCart.numberBuy = updatedValue;
      const newCartAddToLocal = { ...newCart };

      const listNewCart = cart.filter((e: any) => e.detailId != id);
      if (listNewCart.length > 0) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...listNewCart, newCartAddToLocal])
        );
      }
    }
  };
  //Clear cart
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    localStorage.removeItem("cart");
  };
  //shopping other
  const handleShopping = () => {
    navigate("/shop");
  };
  //Payment và lưu vào sql

  const handlePayment = () => {
    if (listProductBuy.length > 0) {
      listProductBuy.forEach((e: any) => {
        const orderData = {
          detailId: e.detailId,
          userId: 1,
          numberBuy: e.numberBuy,
          nameGlass: e.nameGlass,
          totalPrice: e.price * e.numberBuy,
          rgb: e.rgb,
          orderDate: formatDate(new Date()),
          status: 0,
        };
        axios
          .post("http://localhost:8080/api/v1/order", orderData)
          .then(() => console.log("Thêm mới thành công"))
          .catch((err) => console.log(err));
      });
    }

    navigate("/payment");
  };
  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-container1">
          {listProductBuy.length == 0 ? (
            <h4 className="note_cart">Giỏ hàng trống, tiếp tục mua hàng</h4>
          ) : (
            <table className="table">
              <thead>
                <tr style={{ fontSize: "20px" }}>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Ảnh mẫu</th>
                  <th scope="col">Màu sắc</th>
                  <th scope="col">Giá sản phẩm</th>
                  <th scope="col">Số Lượng</th>
                  <th scope="col">Tổng cộng</th>
                </tr>
              </thead>
              <tbody>
                {listProductBuy.map((e: any, i: any) => (
                  <tr style={{ lineHeight: "110px" }} key={i}>
                    <th scope="row">{e.nameGlass}</th>
                    <td>
                      <img src={e.img} alt="" style={{ width: "120px" }} />
                    </td>
                    <td>
                      <span>{e.color}</span>
                      <button
                        className="exampleRgb"
                        style={{ background: e.rgb }}
                      />
                    </td>
                    <td>{formatMoney(e.price)}</td>
                    <td>
                      <InputNumber
                        min={1}
                        max={e.maxNumber}
                        value={e.numberBuy}
                        onChange={(value) => handleUpdate(e.detailId, value)}
                      />
                    </td>
                    <td>{formatMoney(e.totalPrice)}</td>
                    <td>
                      <i
                        className="fa-regular fa-trash-can"
                        style={{ cursor: "pointer", fontSize: "larger" }}
                        onClick={() => handleDelete(e.detailId)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="option-other">
            <button onClick={handleShopping}>
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-arrow-left"
              ></i>
              Tiếp tục mua hàng
            </button>
            <button
              onClick={handleClearCart}
              style={
                totalPrice === 0 ? { opacity: 0.6, cursor: "not-allowed" } : {}
              }
              disabled={totalPrice === 0}
            >
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-trash-can"
              ></i>
              Xóa tất cả sản phẩm
            </button>
          </div>
        </div>
        <div className="cart-container2">
          <p>Thông tin thanh toán</p>
          <div className="cart-container3">
            <span>Tạm tính</span>
            <span>{formatMoney(totalPrice)}</span>
          </div>
          <div className="option-sale">
            <input type="text" placeholder="Mã giảm giá" />
            <button
              style={
                totalPrice === 0 ? { opacity: 0.6, cursor: "not-allowed" } : {}
              }
              disabled={totalPrice === 0}
            >
              Áp dụng
            </button>
          </div>
          <div className="cart-container3">
            <span>Tổng</span>
            <span className="total"> {formatMoney(totalPrice)}</span>
          </div>

          <button
            style={
              totalPrice === 0 ? { opacity: 0.6, cursor: "not-allowed" } : {}
            }
            disabled={totalPrice === 0}
            onClick={handlePayment}
          >
            Tiến hành thanh toán
          </button>

          <p style={{ fontSize: "15px" }}>Chúng tôi chấp nhận thanh toán</p>
          <div className="cart-container4">
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2022/06/image-4.jpg"
              alt=""
            />
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2022/06/anh_4-removebg-preview-1.jpg"
              alt=""
            />
            <img
              src="	https://kinhmatanna.com/wp-content/uploads/2022/06/anh_2-removebg-preview-1.jpg"
              alt=""
            />
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2022/06/Anh_1-removebg-preview-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
