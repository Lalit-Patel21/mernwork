import pool from "../db/dbConfig.js";
import Admin from "../model/Admin.js";

export const dashboardPageAction = (request, response, next) => {
  response.render("dashboard.ejs");
};
export const signInPage = (request, response, next) => {
  response.render("sign-in.ejs");
};

// export const signInAction = (request, response, next) => {
//   let { email, password } = request.body;
//   pool.getConnection((err, con) => {
//     if (!err) {
//       let sql = "select * from admin where email =? and password =?";
//       con.query(sql, [email, password], (err, result) => {
//         con.release();
//         if (!err) {
//           if (result.length != 0) return response.end("Sign in success....");
//           return response.end("Sing in failed...");
//         } else {
//           console.log(err);
//           return response.end("Something wrong...");
//         }
//       });
//     } else console.log(err);
//   });
// };
export const signInAction = (request, response, next) => {
  let { email, password } = request.body;
  let admin = new Admin(null, email, password); // admin:{id:null,email:'test@gmail.com',password:1234}
  admin
    .authenticate()
    .then((result) => {
      if (result.length != 0) {
        request.session.currentUserId = result[0].id;
        request.session.currentUserEmail = result[0].email;
        request.session.isLoggedIn = true;
        response.redirect("/admin/dashboard");
      } else response.redirect("/admin/sign-in");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUpPage = (request, response, next) => {
  response.render("sign-up.ejs");
};

export const signUpAction = (request, response, next) => {
  let { email, password } = request.body;

  // Check if all required fields are provided
  if (!email || !password) {
    return response.end("Please provide all required fields.");
  }

  pool.getConnection((err, con) => {
    if (!err) {
      // Check if the email already exists
      let checkEmailSql = "SELECT * FROM admin WHERE email = ?";
      con.query(checkEmailSql, [email], (err, result) => {
        if (!err) {
          if (result.length > 0) {
            con.release();
            return response.end(
              "Email already exists. Please use a different email."
            );
          }

          // If email doesn't exist, insert the new user
          let insertSql = "INSERT INTO admin (email, password) VALUES (?, ?)";
          con.query(insertSql, [email, password], (err, result) => {
            con.release();
            if (!err) {
              return response.end("Sign-up successful!");
            } else {
              console.log(err);
              return response.end(
                "Error occurred while signing up. Please try again."
              );
            }
          });
        } else {
          con.release();
          console.log(err);
          // response.redirect("/admin/sign-up");
          return response.end(
            "Error occurred during validation. Please try again."
          );
        }
      });
    } else {
      console.log(err);
      return response.end("Database connection failed.");
    }
  });
};
