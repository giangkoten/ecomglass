import { useEffect, useState } from "react";
import "./producytDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Modal, Button, ColorPicker } from "antd";
import Swal from "sweetalert2";
const ProductDetail = () => {
  const [detailProduct, setDetailProduct] = useState([]) as any;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const loadDetail = () => {
    axios
      .get(`http://localhost:8080/api/v1/admin/glasses/${id}`)
      .then((res) => setDetailProduct(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadDetail();
  }, []);

  // Thêm mã màu
  const [isModalOpenColor, setIsModalOpenColor] = useState(false);

  const showModalColor = () => {
    setIsModalOpenColor(true);
  };

  const handleOkColor = () => {
    setIsModalOpenColor(false);
  };

  const handleCancelColor = () => {
    setIsModalOpenColor(false);
  };
  const [colorCreate, setColorCreate] = useState() as any;
  const [quantityCreate, setQuantityCreate] = useState() as any;
  const [rgbCreate, setRgbCreate] = useState() as any;

  const handleCreateColor = (e: any) => {
    e.preventDefault();
    const detail = {
      insertId: id,
      color: colorCreate,
      quantity: +quantityCreate,
      rgb: rgbCreate,
    };
    axios
      .post(`http://localhost:8080/api/v1/admin/postDetail`, detail)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thêm sản phẩm thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        loadDetail();
        setIsModalOpenColor(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 ">
          <h4>Hình ảnh sản phẩm</h4>
          {detailProduct && detailProduct.media && (
            <div
              className="detailProduct_Admin "
              style={{ backgroundImage: `url(${detailProduct.media[0]})` }}
            >
              <span onClick={showModal}>+4</span>
            </div>
          )}
        </div>

        <div className="col-7 ">
          <div className="d-flex justify-content-between">
            <h4>Chi tiết sản phẩm</h4>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={showModalColor}
              >
                Thêm mã màu
              </button>
            </div>
          </div>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Màu sắc</th>
                <th scope="col">Số lượng</th>
                <th scope="col">RGB</th>
              </tr>
            </thead>
            <tbody>
              {detailProduct &&
                detailProduct.options &&
                detailProduct.options.map((e: any, i: any) => (
                  <tr
                    className={
                      e.quantity === 0 ? "bg-secondary text-white" : ""
                    }
                    key={i}
                  >
                    <th scope="row">{i + 1}</th>
                    <td>{e.color}</td>
                    <td>
                      {e.quantity === 0 ? <span>Hết hàng</span> : e.quantity}
                    </td>
                    <td>{e.rgb}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      <Modal
        title="Hình ảnh chi tiết sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modalDetail"
        footer={false}
      >
        {detailProduct &&
          detailProduct.media &&
          detailProduct.media.map((e: any) => <img src={e} alt="" />)}
        <Button type="primary">Sửa ảnh</Button>
      </Modal>
      <Modal
        title="Thêm mã màu mới"
        open={isModalOpenColor}
        onOk={handleOkColor}
        onCancel={handleCancelColor}
        footer={false}
      >
        <form className="row g-3" onSubmit={handleCreateColor}>
          <div className="col-md-12">
            <label className="form-label">Màu sắc</label>
            <input
              type="text"
              className="form-control"
              value={colorCreate}
              onChange={(e) => setColorCreate(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Số lượng</label>
            <input
              type="text"
              className="form-control"
              value={quantityCreate}
              onChange={(e) => setQuantityCreate(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">
              RGB <ColorPicker showText />
            </label>
            <input
              type="text"
              className="form-control"
              value={rgbCreate}
              onChange={(e) => setRgbCreate(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Xác nhận
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProductDetail;
