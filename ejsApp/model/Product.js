import pool from "../db/dbConfig.js";

export default class Product {
  constructor(productId, productName, price, categoryId) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.categoryId = categoryId;
  }

  productAdd() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql =
            "INSERT INTO product (title, price, category_id) VALUES (?,?,?);";
          con.query(
            sql,
            [this.productName, this.price, this.categoryId],
            (err, result) => {
              con.release();
              if (!err) resolve(result);
              else reject(err);
            }
          );
        } else reject(err);
      });
    });
  }
  static productView() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          // let sql = "select * from product;"
          let sql =
            "SELECT p.id, p.title, p.price, c.category_name FROM product p JOIN category c ON p.category_id = c.category_id;";
          con.query(sql, [], (err, result) => {
            con.release();
            if (!err) resolve(result);
            else reject(err);
          });
        } else reject(err);
      });
    });
  }
  static productDelete(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql = "delete from product where id = ?";
          con.query(sql, [id], (err, result) => {
            err ? reject(err) : resolve(result);
            con.release();
          });
        } else reject(err);
      });
    });
  }
  static getProductById(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql = "select * from product where id = ?";
          con.query(sql, [id], (err, result) => {
            err ? reject(err) : resolve(result);
            con.release();
          });
        } else reject(err);
      });
    });
  }
  update() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql = "update product set title=?,price=? where id = ?";
          con.query(
            sql,
            [this.productName, this.price, this.productId],
            (err, result) => {
              err ? reject(err) : resolve(result);
              con.release();
            }
          );
        } else reject(err);
      });
    });
  }
}
