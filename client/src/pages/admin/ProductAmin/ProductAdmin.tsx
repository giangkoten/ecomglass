import axios from "axios";
import { useEffect, useState } from "react";
import { formatMoney } from "../../../helps/formatMoney";
import { useNavigate } from "react-router-dom";
import { Modal, Select } from "antd";
import { ToastContainer, toast } from "react-toastify";

const ProductAdmin = () => {
  const navigate = useNavigate();
  const [glasses, setGlasses] = useState([]) as any;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState() as any;
  const [price, setPrice] = useState() as any;
  const [sale, setSale] = useState() as any;
  const [material, setMaterial] = useState() as any;
  const [style, setStyle] = useState() as any;
  const [id, setId] = useState() as any;
  const loadGlasses = () => {
    axios
      .get("http://localhost:8080/api/v1/admin/glasses")
      .then((res) => setGlasses(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadGlasses();
  }, []);
  const handleViewGlass = (id: number) => {
    navigate(`/admin/products/${id}`);
  };
  //Edit
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //
  const handleChangeMaterial = (value: number) => {
    setMaterial(value);
  };
  const handleChangeStyle = (value: number) => {
    setStyle(value);
  };
  const handleSubmitEdit = (e: any) => {
    e.preventDefault();
    const editGlass = {
      name: name,
      price: price,
      sale: sale,
      material: material,
      style: style,
    };

    axios
      .put(`http://localhost:8080/api/v1/admin/glasses/${id}`, editGlass)
      .then(() => {
        toast.success("Thêm vào giỏ hàng thành công", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        loadGlasses();
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };
  // Add product
  const handleAddProduct = () => {
    navigate("/admin/addProduct");
  };
  return (
    <>
      <div style={{ flex: 1 }}>
        <nav className="navbar navbar-light bg-light justify-content-between ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddProduct}
          >
            Thêm sản phẩm
          </button>
          <form className="form-inline d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
        <div>
          <table className="table">
            <thead>
              <tr className="text-center">
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Chất liệu</th>
                <th scope="col">Kiểu dáng</th>
                <th scope="col">Giá tiền</th>
                <th scope="col">Giá sale</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {glasses.length > 0 &&
                glasses.map((e: any, i: any) => (
                  <tr className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{e.glassName}</td>
                    <td>{e.materialName}</td>
                    <td>{e.styleName}</td>
                    <td>{formatMoney(e.glassPrice)}</td>
                    <td>{Number(e.glassSale) * 100}%</td>
                    <td className="d-flex justify-content-around">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleViewGlass(e.glassId)}
                      >
                        {" "}
                        <i className="fa-regular fa-eye "></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          showModal();
                          setId(e.glassId);
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* modal */}
      <Modal
        title="Chỉnh sửa sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <form onSubmit={handleSubmitEdit}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Giá tiền</label>
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Giá sale</label>
            <input
              type="text"
              className="form-control"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Chất liệu</label>
            <Select
              defaultValue={1}
              style={{ width: 120 }}
              onChange={handleChangeMaterial}
              options={[
                { value: 1, label: "Aceta" },
                { value: 2, label: "Kim loại" },
                { value: 3, label: "Nhựa dẻo" },
              ]}
            />
          </div>
          <div className="form-group">
            <label>Kiểu dáng</label>
            <Select
              defaultValue={1}
              style={{ width: 120 }}
              onChange={handleChangeStyle}
              options={[
                { value: 1, label: "Hình vuông" },
                { value: 2, label: "Mắt mèo" },
                { value: 3, label: "Oval" },
              ]}
            />
          </div>
          <div className="mt-5 text-center">
            <button type="submit" className="btn btn-success w-50 ">
              Xác nhận chỉnh sửa
            </button>
          </div>
        </form>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default ProductAdmin;
