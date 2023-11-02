import db from "../utils/database";

export interface Order {
  detailId: number;
  userId: number;
  numberBuy: number;
  nameGlass: string;
  totalPrice: number;
  rgb: string;
  orderDate: string;

  order_cart_id: number;
}
export const createOrder = async (
  detailId: Order,
  userId: Order,
  numberBuy: Order,
  nameGlass: Order,
  totalPrice: Order,
  rgb: Order,
  orderDate: Order,
  order_cart_id: Order
) => {
  console.log(totalPrice);
  return db.execute(`call ecomglass.create_order(?,?,?,?,?,?,?,?)`, [
    detailId,
    userId,
    numberBuy,
    nameGlass,
    totalPrice,
    rgb,
    orderDate,
    order_cart_id,
  ]);
};

export const createOrderCart = async (userId: Order) => {
  return db.execute(
    `INSERT INTO ecomglass.order_cart (user_id, status) VALUES (?,?)`,
    [userId, 0]
  );
};

export const getAllOrderByUser = async (id: number) => {
  return db.execute(
    `SELECT o.*, d.glassId, oc.status  FROM ecomglass.order as o
	INNER JOIN order_cart as oc ON oc.order_cart_id = o.order_cart_id
	INNER JOIN detail as d ON d.detailId = o.detailId
    WHERE o.userId = ?`,
    [id]
  );
};

export const updatePayment = async (id: number) => {
  return db.execute(
    `UPDATE ecomglass.order_cart SET status = '0' WHERE (order_cart_id = ?)
  `,
    [id]
  );
};

export const getAllOrder = async () => {
  return db.execute(`SELECT  o.userId , o.detailId, o.numberBuy, o.nameGlass, o.price, o.orderDate, oc.order_cart_id, oc.status, u.username FROM ecomGlass.order as o 
  INNER JOIN order_cart as oc ON o.order_cart_id = oc.order_cart_id
  INNER JOIN users as u ON o.userId = u.userId`);
};
