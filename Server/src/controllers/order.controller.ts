import * as orderService from "../services/order.service";
import { Request, Response } from "express";
export const createOrder = async (req: Request, res: Response) => {
  try {
    const listOrder = req.body;
    const orderCart = await orderService.createOrderCart(listOrder[0].userId);
    let [row]: any = orderCart;

    if (orderCart.length > 0) {
      if (row && row.insertId) {
        listOrder.forEach(async (e: any) => {
          await orderService.createOrder(
            e.detailId,
            e.userId,
            e.numberBuy,
            e.nameGlass,
            e.totalPrice,
            e.rgb,
            e.orderDate,
            row.insertId
          );
        });

        res.json({
          message: "Create order success",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrderByUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderCheck = await orderService.getAllOrderByUser(+id);
    const [row] = orderCheck as any;
    const groupedData = row.reduce((result: any, item: any) => {
      (result[item.order_cart_id] = result[item.order_cart_id] || []).push(
        item
      );
      return result;
    }, {});
    const transformedData = Object.values(groupedData);
    res.json({
      data: transformedData,
    });
  } catch (error) {
    console.log(error);
  }
};
