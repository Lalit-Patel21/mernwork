import Category from "../model/Category.js";
export const addCategoryPage = (request, response, next) => {
  response.render("add-category.ejs");
};

export const addCategoryAction = (request, response, next) => {
  console.log(request.body);

  let { category } = request.body;
  //   Check if all required fields are provided
  if (!category) {
    return response.end("Please provide required fields.");
  }
  let obj = new Category(null, category);
  obj
    .categoryAdd()
    .then((result) => {
      if (result.length != 0) {
        // response.end("category Added Successfully!");
        response.redirect("/category/add-category");
      }
    })
    .catch((err) => {
      console.log(err);
      response.end("category not Added !");
    });
};

// export const addCategoryAction = (request, response, next) => {
//   console.log(request.body);

// let {category} = request.body;

// Check if all required fields are provided
//   if (!category) {
//     return response.end("Please provide required fields.");
//   }

//   pool.getConnection((err, con) => {
//     if (!err) {
//       // Check if the Product already exists
//       let checkCategorySql = "SELECT * FROM category WHERE categoryname = ?";
//       con.query(checkCategorySql, [category], (err, result) => {
//         if (!err) {
//           if (result.length > 0) {
//             con.release();
//             return response.end(
//               "category already exists. Please proide different product."
//             );
//           }

//           // If Product doesn't exist, insert the new product
//           let insertSql = "INSERT INTO category (categoryName) VALUES (?)";
//           con.query(insertSql, [categoryName], (err, result) => {
//             con.release();
//             if (!err) {
//               return response.end("category added successful!");
//             } else {
//               console.log(err);
//               return response.end(
//                 "Error occurred while adding category. Please try again."
//               );
//             }
//           });
//         } else {
//           con.release();
//           console.log(err);
//           // response.redirect("/admin/sign-up");
//           return response.end(
//             "Error occurred during validation. Please try again."
//           );
//         }
//       });
//     } else {
//       console.log(err);
//       return response.end("Database connection failed.");
//     }
//   });
// };

// export const addProductAction = (request, response, next) => {
//   console.log(request.body);
//   let { productName, price, categoryId } = request.body;

//   // Check if all required fields are provided
//   if (!productName || !price || !categoryId) {
//     return response.end("Please provide all required fields.");
//   }

//   let product = new Product(productName, price, categoryId);

//   product
//     .productAdd()
//     .then((result) => {
//       response.end("Product Added Successfully!");
//     })
//     .catch((err) => {
//       console.log(err);
//       response.end("Product not Added!");
//     });
// };
export const viewCategoryPage = (request, response, next) => {
  Category.categoryView()
    .then((result) => {
      if (result.length != 0) {
        console.log(result);
        return response.render("view-category.ejs", { categoryList: result });
        // response.end("category view");
      }
    })
    .catch((err) => {
      console.log(err);
      response.end("view catrgory failed!");
    });
};

export const deleteCategoryPage = (request, response, next) => {
  let categoryId = request.params.categoryId;
  console.log(categoryId);
  Category.categoryDelete(categoryId)
    .then((result) => {
      return response.redirect("/category/view-category");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editCategoryPage = async (request, response, next) => {
  try {
    let categoryId = request.params.categoryId;
    let result = await Category.getCategoryById(categoryId);
    console.log(result[0]);
    return response.render("edit-category.ejs", { category: result[0] });
  } catch (err) {
    console.log(err);
  }
};

export const editCategoryAction = (request, response, next) => {
  let { id, title, price } = request.body;
  // console.log(id, title, price);
  let cat = new Category(id, title, price);
  cat
    .update()
    .then((result) => {
      response.redirect("/category/view-category");
    })
    .catch((err) => {
      console.log(err);
    });
};
