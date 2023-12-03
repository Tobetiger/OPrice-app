import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
url: {type: String, required: true, unique: true},
image: {type: String, require: true},
currency: {type: String, require: true},
title: {type: String, require: true},
currentPrice: {type: Number, require: true},
priceHistory: [{
  price: {type: Number, require: true},
 date: {type: Number, require: true},
}
]

})