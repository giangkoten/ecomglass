import axios from "axios";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./addProduct.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const AddProduct = () => {
  const [totalMaterial, setTotalMaterial] = useState([
    { key: 1, value: "Aceta" },
    { key: 2, value: "Kim loại" },
    { key: 3, value: "Nhựa dẻo" },
  ]);
  const [totalStyle, setTotalStyle] = useState([
    { key: 1, value: "Hình vuông" },
    { key: 2, value: "Mắt mèo" },
    { key: 3, value: "Oval" },
  ]);
  const [name, setName] = useState() as any;
  const [price, setPrice] = useState() as any;
  const [sale, setSale] = useState() as any;
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [insertId, setInsertId] = useState(null);
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rgb, setRgb] = useState("");
  const handleSubmitInFo = (e: any) => {
    e.preventDefault();
    const infoGlass = {
      name: name,
      price: price,
      sale: sale,
      materialId: selectedMaterial,
      styleId: selectedStyle,
    };
    axios
      .post(`http://localhost:8080/api/v1/admin/`, infoGlass)
      .then((res) => {
        setInsertId(res.data.idNew),
          toast.success("Thêm thông tin sản phẩm thành công", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      })
      .catch((err) => console.log(err));
  };

  //Detail
  const handleSubmitDetail = (e: any) => {
    e.preventDefault();
    if (insertId !== null) {
      const detail = {
        insertId: insertId,
        color: color,
        quantity: quantity,
        rgb: rgb,
      };
      axios
        .post(`http://localhost:8080/api/v1/admin/postDetail`, detail)
        .then(() =>
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thêm sản phẩm thành công",
            showConfirmButton: false,
            timer: 1500,
          })
        )
        .catch((err) => console.log(err));
    }
  };
  //Upload Img
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const onchangeImage = async (e: any) => {
    const cac = e.target.files;
    const newData = new FormData();
    for (const key of Object.keys(cac)) {
      newData.append("image", cac[key]);
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/media/",
        newData,
        {
          headers: { "content-type": "multipart/form-data" },
        }
      );
      console.log("Response", response.data);
      setUploadedImages(response.data.imageList);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };
  const handleUpdateMedia = () => {
    if (insertId !== null) {
      const optionMedia = {
        insertId: insertId,
        mediaList: uploadedImages,
      };
      axios
        .post(`http://localhost:8080/api/v1/admin/postMedia`, optionMedia)
        .then(() => {
          console.log("hehe");

          toast.success("Thêm ảnh sản phẩm thành công", {
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
    }
  };

  return (
    <>
      <div className="container">
        <form className="row g-3" onSubmit={handleSubmitInFo}>
          <h4 className="mt-5">Thông tin sản phẩm</h4>
          <div className="col-12">
            <label className="form-label">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá sản phẩm </label>
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Giá sale</label>
            <input
              type="text"
              className="form-control"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Chất liệu</label>
            <select
              className="form-select"
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
            >
              {totalMaterial.map((material: any) => (
                <option key={material.key} value={material.key}>
                  {material.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Kiểu dáng</label>
            <select
              className="form-select"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
            >
              {totalStyle.map((style: any) => (
                <option key={style.key} value={style.key}>
                  {style.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Thêm thông tin mới
            </button>
          </div>
        </form>
        <h4 className="mt-5">Hình ảnh sản phẩm</h4>
        <div>
          <h5>
            Upload file{" "}
            <label htmlFor="file" className="cursor-pointer mr-3">
              <UploadOutlined />
            </label>
          </h5>
          <span>
            <input
              type="file"
              name="file"
              id="file"
              multiple
              hidden
              onChange={onchangeImage}
            />
          </span>
          <div className="listImgCreateAdmin">
            {uploadedImages.map((image: any, index: any) => (
              <div className="" key={index}>
                <img
                  className=" mb-5 mt-5 imgCreateAdmin"
                  src={image}
                  alt={`Uploaded Image ${index}`}
                />
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={handleUpdateMedia}>
            Thêm hình ảnh mới
          </button>
        </div>

        <h4 className="mt-5">Chi tiết sản phẩm</h4>
        <form className="row g-3 mb-5" onSubmit={handleSubmitDetail}>
          <div className="col-md-4">
            <label className="form-label">Màu sắc sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Số lượng sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Mã RGB</label>
            <input
              type="text"
              className="form-control"
              value={rgb}
              onChange={(e) => setRgb(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Thêm mã màu mới
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddProduct;
