import db from "../../utils/database";
export const getAll = async () => {
  return db.execute(`SELECT g.glassId , g.glassName, g.glassPrice,g.glassSale, m.materialName, s.styleName FROM glasses as g
  INNER JOIN material as m ON m.materialId = g.materialId
  INNER JOIN style as s ON g.styleId = s.styleId
  `);
};

export const getOne = async (id: number) => {
  return db.execute(
    `SELECT m.glassId, m.img1, m.img2, m.img3, m.img4, d.color, d.quantity, d.rgb FROM media as m
  INNER JOIN detail as d ON d.glassId = m.glassId WHERE m.glassId = ?`,
    [id]
  );
};

export const editOne = async (
  id: number,
  name: string,
  price: number,
  sale: number,
  material: number,
  style: number
) => {
  return db.execute(
    `UPDATE ecomglass.glasses SET glassName = ?, glassPrice = ?, materialId = ?, styleId = ?, glassSale = ? WHERE (glassId = ?)
  `,
    [name, price, material, style, sale, id]
  );
};

export const creatOne = async (
  name: string,
  price: number,
  sale: number,
  materialId: number,
  styleId: number
) => {
  return db.execute(
    `INSERT INTO ecomglass.glasses (glassName, glassPrice, materialId, styleId, glassSale) VALUES (?, ?, ?, ?, ?)
  `,
    [name, price, materialId, styleId, sale]
  );
};

export const createDetail = async (
  insertId: number,
  color: string,
  quantity: number,
  rgb: string
) => {
  return db.execute(
    `INSERT INTO ecomglass.detail (glassId, color, quantity, rgb) VALUES (?, ?,?,?)
  `,
    [insertId, color, quantity, rgb]
  );
};

export const createMedia = async (mediaList: any, insertId: number) => {
  return db.execute(
    `INSERT INTO ecomglass.media ( glassId, img1, img2, img3, img4) VALUES (?,? ,?,?,?) `,
    [insertId, mediaList[0], mediaList[1], mediaList[2], mediaList[3]]
  );
};

export const updateOrder = async (id: number) => {
  return db.execute(
    `UPDATE ecomglass.order_cart SET status = '1' WHERE (order_cart_id = ?)
  `,
    [id]
  );
};

export const deleteQuantity = async (id: number) => {
  return db.execute(
    `UPDATE ecomglass.detail AS d
  JOIN ecomglass.order AS o ON d.detailId = o.detailId
  JOIN ecomglass.order_cart AS oc ON o.order_cart_id = oc.order_cart_id
  SET d.quantity = d.quantity - o.numberBuy
  WHERE o.detailId = ?`,
    [id]
  );
};
