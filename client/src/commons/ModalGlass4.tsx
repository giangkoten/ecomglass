import { Button } from "antd";
import React, { useState } from "react";

const ModalGlass4 = () => {
  const [materialCheckboxes, setMaterialCheckboxes] = useState([
    {
      id: 1,
      label: "Aceta",
      img: "https://kinhmatanna.com/wp-content/uploads/2022/07/nhua-mix-kim-loai.jpg",
    },
    {
      id: 2,
      label: "Kim loại",
      img: "https://kinhmatanna.com/wp-content/uploads/2022/07/kim-loai.jpg",
    },
    {
      id: 3,
      label: "Nhựa dẻo",
      img: "https://kinhmatanna.com/wp-content/uploads/2022/07/nhua.jpg",
    },
  ]);
  return (
    <div className="container w-100 pb-5">
      <h4 className="text-center p-5">Chất liệu</h4>
      <div className="d-flex flex-row grid gap-3 justify-content-around">
        {materialCheckboxes.map((e: any, i: any) => (
          <div className="d-flex flex-column" key={i}>
            <img src={e.img} alt="" />
            <h5 className="m-auto">{e.label}</h5>
            <input type="checkbox" className="mt-3 width-3" />
          </div>
        ))}
      </div>
      <div className="pt-5 text-center ">
        <Button type="primary" className=" ">
          Xem kết quả{" "}
        </Button>
      </div>
    </div>
  );
};

export default ModalGlass4;
