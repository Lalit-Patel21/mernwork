import { Product } from "../model/product.model.js";

export const saveInBulk = (request, response, next) => {
  Product.insertMany(request.body)
    .then((result) => {
      return response.status(201).json({ message: "All product saved.." });
    })
    .catch((err) => {
      return response.status(500).json({ error: "Internal Server Error" });
    });
};

export const list = (request, response, next) => {
  Product.find()
    .then((result) => {
      return response.status(200).json({ products: result });
    })
    .catch((err) => {
      return response.status(500).json({ error: "Internal Server Error" });
    });
};

export const getProduct = async (request, response, next) => {
  try {
    let id = request.params.id;
    let product = await Product.findById(id);
    if (product) return response.status(200).json({ product });
    return response
      .status(404)
      .json({ error: "Requested resouce not available | id not found" });
  } catch (err) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
