// import mongoose from "mongoose";
// import { Category } from "./category.model";
// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       //   required: true,
//       default: 0,
//     },
//     stock: {
//       default: 0,
//       type: Number,
//     },
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Category",
//       required: true,
//     },
//     owner: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// export const Product = mongoose.model("Product", productSchema);
