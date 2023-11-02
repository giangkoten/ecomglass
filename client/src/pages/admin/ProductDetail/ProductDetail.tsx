import { useEffect, useState } from "react";
import "./producytDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Modal, Button } from "antd";
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
          <div>
            <h4>Chi tiết sản phẩm</h4>
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
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{e.color}</td>
                      <td>{e.quantity}</td>
                      <td>{e.rgb}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
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
    </div>
  );
};

export default ProductDetail;
