// import { response } from "express";
import Product from "../model/Product.js";
export const addProductPage = (request, response, next) => {
  response.render("add-product.ejs");
};

export const addProductAction = (request, response, next) => {
  console.log(request.body);
  let { title, price, category } = request.body;

  // Check if all required fields are provided
  if (!title || !price || !category) {
    return response.end("Please provide all required fields.");
  }
  let product = new Product(title, price, category);
  product
    .productAdd()
    .then((result) => {
      if (result.length != 0) {
        //  response.end("product Added Successfully!");
        response.redirect("/product/add-product");
      }
    })
    .catch((err) => {
      console.log(err);
      response.end("product not Added !");
    });
};
// export const addProductAction = (request, response, next) => {
//   console.log(request.body);
//   let { productName, price, category } = request.body;

//   // Check if all required fields are provided
//   if (!productName || !price || !category) {
//     return response.end("Please provide all required fields.");
//   }

// pool.getConnection((err, con) => {
//   if (!err) {
//     // Check if the Product already exists
//     let checkProductSql = "SELECT * FROM product WHERE productname = ?";
//     con.query(checkProductSql, [productName], (err, result) => {
//       if (!err) {
//         if (result.length > 0) {
//           con.release();
//           return response.end(
//             "Product already exists. Please proide different product."
//           );
//         }

//         // If Product doesn't exist, insert the new product
//         let insertSql =
//           "INSERT INTO product (productName,price,category) VALUES (?,?, ?)";
//         con.query(
//           insertSql,
//           [productName, price, category],
//           (err, result) => {
//             con.release();
//             if (!err) {
//               return response.end("Product added successful!");
//             } else {
//               console.log(err);
//               return response.end(
//                 "Error occurred while adding Product. Please try again."
//               );
//             }
//           }
//         );
//       } else {
//         con.release();
//         console.log(err);
//         // response.redirect("/admin/sign-up");
//         return response.end(
//           "Error occurred during validation. Please try again."
//         );
//       }
//     });
//   } else {
//     console.log(err);
//     return response.end("Database connection failed.");
//   }
// });
// };

export const viewProductPage = (request, response, next) => {
  Product.productView()
    .then((result) => {
      if (result.length != 0) {
        console.log(result);
        return response.render("view-product.ejs", { productList: result });
        // response.end("Product view");
      }
    })
    .catch((err) => {
      console.log(err);
      response.end("view Product failed!");
    });
};

// export const viewProductPage = async (request, response, next) => {
//   try {
//     let result = await Product.getProduct();
//     return response.render("view-product.ejs", { productList: result });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const deleteProductPage = (request, response, next) => {
  let productId = request.params.productId;
  // console.log(productId);
  Product.productDelete(productId)
    .then((result) => {
      return response.redirect("/product/view-product");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editProductPage = async (request, response, next) => {
  try {
    let productId = request.params.productId;
    let result = await Product.getProductById(productId);
    // console.log(result[0]);
    return response.render("edit-product.ejs", { product: result[0] });
  } catch (err) {
    console.log(err);
  }
};

export const editProductAction = (request, response, next) => {
  let { id, title, price } = request.body;
  // console.log(id, title, price);
  let pro = new Product(id, title, price);
  pro
    .update()
    .then((result) => {
      response.redirect("/product/view-product");
    })
    .catch((err) => {
      console.log(err);
    });
};
