import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./orderChecking.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatMoney } from "../../helps/formatMoney";
import { Modal } from "antd";

const OrderChecking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listOrder, setListOrder] = useState([]);
  const id = JSON.parse(localStorage.getItem("idUser") as any);
  const [idOrder, setIdOrder] = useState() as any;

  const loadOrder = () => {
    axios
      .get(`http://localhost:8080/api/v1/order/${id}`)
      .then((res) => setListOrder(res.data.data))
      .catch((err) => console.log(err));
  };
  //payment
  const showModal: any = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    loadOrder();
  }, []);

  const calculateTotalPrice = (group: any) => {
    return group.reduce((total: any, e: any) => total + e.price, 0);
  };

  const handleUpdatePayment = (e: any) => {
    setIdOrder(e);
    setIsModalOpen(true);
  };
  const handleSubmitOrder = () => {
    axios
      .put(`http://localhost:8080/api/v1/order/${idOrder}`)
      .then((res) => {
        loadOrder(), setIsModalOpen(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="container">
        {listOrder.length > 0 &&
          listOrder.map((group: any, groupIndex: any) => (
            <div key={groupIndex}>
              <h5>Ngày đặt hàng</h5>
              <span>{group[0].orderDate}</span>
              <h6>
                Tổng giá tiền :{" "}
                <span>{formatMoney(calculateTotalPrice(group))}</span>
              </h6>
              <h6>
                Trạng thái đơn hàng:{" "}
                {group[0].status === 2 ? (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleUpdatePayment(group[0].order_cart_id)}
                  >
                    Chưa thanh toán
                  </button>
                ) : group[0].status === 0 ? (
                  <button type="button" className="btn btn-warning">
                    Chờ xử lý
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary">
                    Đã thanh toán
                  </button>
                )}
              </h6>
              <table className="table">
                <thead className="text-center">
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên kính</th>
                    <th scope="col">Màu sắc</th>
                    <th scope="col">Số lượng mua</th>
                    <th scope="col">Tổng giá tiền</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {group.map((e: any, itemIndex: any) => (
                    <tr key={itemIndex}>
                      <th scope="row">{itemIndex + 1}</th>
                      <td>{e.nameGlass}</td>
                      <td>
                        <button
                          className="buttonOrderChecking"
                          style={{ background: e.rgb }}
                        ></button>
                      </td>
                      <td>{e.numberBuy}</td>
                      <td>{formatMoney(e.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      </div>
      <Footer />
      <Modal
        title="Thêm thông tin thanh toán"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <>
          <div className="mb-3">
            <label className="form-label">Địa chỉ nhà</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Số điện thoại</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3 text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmitOrder}
            >
              Xác nhận
            </button>
          </div>
        </>
      </Modal>
    </>
  );
};

export default OrderChecking;
