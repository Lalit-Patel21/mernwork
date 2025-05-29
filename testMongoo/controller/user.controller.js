import db from "../db/dbConfig.js";
export const signUp = (request, response, next) => {
  // console.log("i am in signUp");
  db.collection("users")
    .insertOne(request.body)
    .then((result) => {
      return response
        .status(201)
        .json({ message: "user created..", user: result });
    })
    .catch((err) => {
      return response.status(500).json({ error: "Internal Server Error" });
    });
};

export const signIn = async (request, response, next) => {
  // console.log("i am in signIn");
  try {
    let user = await db
      .collection("users")
      .findOne({ email: request.body.email, password: request.body.password });
    if (user)
      return response.status(200).json({ message: "Sign in success", user });
    return response.status(401).json({ error: "Bad request" });
  } catch (err) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const sign = (request, response, next) => {
  console.log("i am in signIn");
};
