import { Button } from "antd";
import React, { useState } from "react";

const ModalGlass3 = () => {
  const [styleCheckboxes, setStyleCheckboxes] = useState([
    {
      id: 1,
      label: "Hình vuông",
      img: "https://kinhmatanna.com/wp-content/uploads/2022/07/vuong.jpg",
    },
    {
      id: 2,
      label: "Mắt mèo",
      img: "https://kinhmatanna.com/wp-content/uploads/2022/07/mat-meo.jpg",
    },
    {
      id: 3,
      label: "Oval",
      img: "https://kinhmatanna.com/wp-content/uploads/2022/07/tron.jpg",
    },
  ]);
  return (
    <div className="container w-100 pb-5">
      <h4 className="text-center p-5">Kiểu dáng</h4>
      <div className="d-flex flex-row grid gap-3 justify-content-around">
        {styleCheckboxes.map((e: any, i: any) => (
          <div className="d-flex flex-column" key={i}>
            <img src={e.img} alt="" />
            <h5 className="m-auto">{e.label}</h5>
            <input type="checkbox" className="mt-3 width-3" />
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

export default ModalGlass3;
