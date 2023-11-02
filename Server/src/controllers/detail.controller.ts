import { Request, Response } from "express";
import * as detailService from "../services/detail.service";

interface OptionItem {
  color: string;
  quantity: number;
  rgb: string;
  detailId: number;
}

export const getOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let [data]: any = await detailService.getOne(+id);
    if (Array.isArray(data)) {
      if (data.length > 0) {
        //
        const detail: any = {
          name: data[0][0].glassName,
          materialName: data[0][0].materialName,
          price: data[0][0].glassPrice,
          sale: data[0][0].glassSale,
          glassId: data[0][0].glassId,
          option: [],
        };
        data[0].forEach((e: any) => {
          const optionItem: OptionItem = {
            color: e.color,
            quantity: e.quantity,
            rgb: e.rgb,
            detailId: e.detailId,
          };
          detail.option.push(optionItem);
        });

        //
        res.json({ data: detail });
      } else {
        res.status(404).json({ error: "Không tìm thấy dữ liệu" });
      }
    } else {
      res.status(500).json({ error: "Lỗi không xác định" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
