import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatMoney } from "../../../helps/formatMoney";
import { ToastContainer, toast } from "react-toastify";

const OrderAdmin = () => {
  const [orderList, setOrderList] = useState([]) as any;
  const loadOrder = () => {
    axios
      .get("http://localhost:8080/api/v1/order/")
      .then((res) => setOrderList(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadOrder();
  }, []);
  const handleUpdateStatus = (e: any) => {
    console.log(e);

    axios
      .put(`http://localhost:8080/api/v1/admin/order/${e.order_cart_id}`)
      .then((res) => {
        toast.success("Đã xác nhận thanh toán", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log(err));
    axios
      .put(`http://localhost:8080/api/v1/admin/deleteQuantity/${e.detailId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    loadOrder();
  };
  return (
    <>
      <div className="w-100 mt-5">
        <h4 className="mb-5">Lịch sử giao dịch và thanh toán</h4>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Khách hàng</th>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng giá tiền</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 &&
              orderList.map((group: any, i: any) => (
                <tr key={i} className="text-center">
                  <th scope="row">{i + 1}</th>
                  <td>{group[0].username}</td>
                  <td>{group.map((e: any) => e.nameGlass).join(", ")}</td>
                  <td>{group.map((e: any) => e.numberBuy).join(", ")}</td>
                  <td>
                    {formatMoney(
                      group.reduce(
                        (total: number, e: any) => total + e.price,
                        0
                      )
                    )}
                  </td>

                  <td>
                    {group[0].status == 1 ? (
                      <button type="button" className="btn btn-primary">
                        Đã thanh toán
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handleUpdateStatus(group[0])}
                      >
                        Chờ xử lý
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};

export default OrderAdmin;
