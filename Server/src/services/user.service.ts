import db from "../utils/database";

export const createOne = async (
  name: string,
  email: string,
  password: string
) => {
  return db.execute(
    `INSERT INTO users (userName, userEmail, userPassword) VALUES (?,?,?)`,
    [name, email, password]
  );
};

export const findOneByEmail = async (email: string) => {
  return db.execute(`SELECT * FROM users WHERE userEmail = ?`, [email]);
};

export const getOne = async (id: number) => {
  console.log(id);

  return db.execute(`SELECT * FROM users WHERE userId = ?`, [id]);
};
