import { log } from "console";
import * as productService from "../../services/admin/product.service";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    let [data]: any = await productService.getAll();
    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: "Get all glasses",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let [data]: any = await productService.getOne(+id);
    const result = {
      glassId: data[0].glassId,
      media: [data[0].img1, data[0].img2, data[0].img3, data[0].img4],
      options: data.map((item: any) => ({
        color: item.color,
        quantity: item.quantity,
        rgb: item.rgb,
      })),
    };
    res.json({
      message: `Get one by idGlass=${id}`,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, sale, material, style } = req.body;

    await productService.editOne(+id, name, +price, +sale, +material, +style);

    res.json({
      message: `edit one by id = ${id} successs`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const creatOne = async (req: Request, res: Response) => {
  try {
    const { name, price, sale, materialId, styleId } = req.body;
    const [data]: any = await productService.creatOne(
      name,
      price,
      sale,
      materialId,
      styleId
    );
    res.json({
      message: `create glass successfully`,
      idNew: data.insertId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createDetail = async (req: Request, res: Response) => {
  try {
    const { insertId, color, quantity, rgb } = req.body;
    await productService.createDetail(insertId, color, quantity, rgb);
    res.json({
      message: `create detail by glassId = ${insertId}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createMedia = async (req: Request, res: Response) => {
  try {
    const { mediaList, insertId } = req.body;
    await productService.createMedia(mediaList, insertId);
    res.json({
      message: "create imglist",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productService.updateOrder(+id);
    res.json({
      message: `Update order by id = ${id}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuantity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productService.deleteQuantity(+id);
    res.json({
      message: `Update quantity successfully`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productService.deleteOne(+id);
    res.json({
      message: `Delete glass successfully`,
    });
  } catch (error) {
    console.log(error);
  }
};
