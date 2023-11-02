import db from "../utils/database";

export const getMedia = async (id: number) => {
  return db.execute(`call ecomglass.media_detail(?)`, [id]);
};
