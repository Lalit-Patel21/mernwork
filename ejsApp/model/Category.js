import pool from "../db/dbConfig.js";

export default class Category {
  constructor(id, categoryName) {
    this.id = id;
    this.categoryName = categoryName;
    // console.log(categoryName);
  }

  categoryAdd() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql = "INSERT INTO category (category_name) VALUES (?);";
          con.query(sql, [this.categoryName], (err, result) => {
            con.release();
            if (!err) resolve(result);
            else reject(err);
          });
        } else reject(err);
      });
    });
  }
  static categoryView() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql = "select * from category;";
          con.query(sql, [], (err, result) => {
            con.release();
            if (!err) resolve(result);
            else reject(err);
          });
        } else reject(err);
      });
    });
  }

  static categoryDelete(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql = "delete from category where id = ?";
          con.query(sql, [id], (err, result) => {
            err ? reject(err) : resolve(result);
            con.release();
          });
        } else reject(err);
      });
    });
  }
  static getCategoryById(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (!err) {
          let sql = "select * from category where id = ?";
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
          let sql = "update category set category=?";
          con.query(sql, [this.categoryName], (err, result) => {
            err ? reject(err) : resolve(result);
            con.release();
          });
        } else reject(err);
      });
    });
  }
}
