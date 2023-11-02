import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface PropsType {
  handleCloseModal: () => void;
}

const ModalGlass: React.FC<PropsType> = ({ handleCloseModal }) => {
  const [genderCheckboxes, setGenderCheckboxes] = useState([
    { id: 1, label: "Nam", checked: false },
    { id: 2, label: "Nữ", checked: false },
  ]);
  const navigate = useNavigate();

  const handleGender = (id: number) => {
    navigate(`/gender/:${id}`);
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-center">Chọn kính phù hợp với bạn</h4>
        <div className="d-flex justify-content-end">
          <Button onClick={handleCloseModal}>Đóng</Button>
        </div>
        <hr />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h4 className="text-center p-3">Giới tính của bạn là:</h4>
            <div className="container">
              <div className="row ">
                <div className="col-6 pb-3 ">
                  <img
                    src="https://kinhmatanna.com/wp-content/uploads/2023/05/IMG_782111-scaled.jpg"
                    alt=""
                    className="w-100"
                    style={{ height: "330px" }}
                  />
                </div>
                <div className="col-6 pb-3">
                  {" "}
                  <img
                    src="https://kinhmatanna.com/wp-content/uploads/2023/05/IMG_778333-scaled.jpg"
                    alt=""
                    className="w-100"
                    style={{ height: "330px" }}
                  />
                </div>
                <div className="row">
                  {genderCheckboxes.map((e: any, i: any) => (
                    <div className="col-6 text-center" key={i}>
                      <input
                        type="checkbox"
                        onClick={() => handleGender(e.id)}
                      />{" "}
                      <span>{e.label}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <Button type="primary">Tiếp tục</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalGlass;
