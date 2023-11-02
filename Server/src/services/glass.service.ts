import db from "../utils/database";
export const getAll = async (keyStyle: number, keyMaterial: number) => {
  return db.execute(`call ecomglass.All_product_store(?,?)`, [
    keyStyle,
    keyMaterial,
  ]);
};
