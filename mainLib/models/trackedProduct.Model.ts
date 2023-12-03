import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
url: {type: String, required: true, unique: true},
image: {type: String, require: true},
currency: {type: String, require: true},
title: {type: String, require: true},
currentPrice: {type: Number, require: true},
priceHistory: [{
  price: {type: Number, require: true},
 date: {type: Date, require: true},
}],

 lowestPrice: {type: Number},
 highestPrice: {type: Number},
 averagePrice: {type: Number},
 discountRate: {type: Number, require: true},
 category: {type: String, require: true},
 reviews: {type: Number},
 isOutOfStock: {type: Boolean, default: false },

users: [{
  email: {type: String, require: true},
}], default: [],
}, {timestamps: true});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema );

export default Product;