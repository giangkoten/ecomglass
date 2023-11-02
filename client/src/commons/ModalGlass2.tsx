import { Button } from "antd";
import React, { useState } from "react";

const ModalGlass2 = () => {
  const [faceCheckboxes, setFaceCheckboxes] = useState([
    {
      id: 1,
      label: "Hình kim cương",
      img: "https://kinhmatanna.com/wp-content/uploads/2023/05/mat-kim-cuong.png",
    },
    {
      id: 2,
      label: "Hình tam giác",
      img: "https://kinhmatanna.com/wp-content/uploads/2023/05/mat-tam-giac.png",
    },
    {
      id: 3,
      label: "Hình trái xoan",
      img: "https://kinhmatanna.com/wp-content/uploads/2023/05/mat-trai-xoan.png",
    },
    {
      id: 1,
      label: "Hình vuông",
      img: "https://kinhmatanna.com/wp-content/uploads/2023/05/mat-hinh-vuong.png",
    },
  ]);
  return (
    <div className="container w-100 pb-5">
      <h4 className="text-center p-5">Chọn hình dáng khuôn mặt</h4>
      <div className="d-flex flex-row grid gap-3 justify-content-around">
        {faceCheckboxes.map((e: any, i: any) => (
          <div className="d-flex flex-column" key={i}>
            <img src={e.img} alt="" />
            <h5 className="m-auto">{e.label}</h5>
            <input type="checkbox" className="mt-3" />
          </div>
        ))}
      </div>
      <div className="pt-5 text-center ">
        <Button type="primary" className=" ">
          Đi tiếp
        </Button>
      </div>
    </div>
  );
};

export default ModalGlass2;
