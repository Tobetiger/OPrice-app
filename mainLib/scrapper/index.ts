"use server"

import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
  if(!url) return;

  //setting up my bright data proxy (password and usname)
  const username = (process.env.BRIGHT_DATA_USERNAME);
  const password = (process.env.BRIGHT_DATA_PASSWORD);
const port = 22225;
const session_id = (1000000 * Math.random()) | 0;

const options: any = {
auth: {
username: `${username}-session-${session_id}`,
password,
},
host: "brd.superproxy.io",
port,
rejectUnauthorized: false,
}
try {
  //fetch the product page
  const response = await axios.get(url, options);
  const $ = cheerio.load(response.data);
  

  //Extract product title
  const title = $("#productTitle").text().trim();

  const currency = extractCurrency($(".a-price-symbol"));

  const discountRate = $(".savingsPerccentage").text().replace(/[-%]/g, "");

const outOfStock = $("#availability span").text().trim().toLowerCase() === "Currently Unavailable";

const images = 
$("#imgBlockFront").attr("data-a-dynamic-image") ||
 $("#landingImage").attr("data-a-dynamic-image") ||
 "{}"

 const imageUrl = Object.keys(JSON.parse(images));

  //Extract Product Price
  const currentPrice = extractPrice(
    $(".priceToPay span.a-price-whole"),
    $("a.size.base.a-color-price"),
    $(".a-button-selected .a-color-base"),
    $(".a-price.a-text-price"),
    );

const originalPrice = extractPrice(
  $("#priceblock_ourprice"),
  $("#listprice"),
  $("#priceblock_dealprice"),
  $(".a-price.a-text-price span.a-offscreen"),
  $(".a-size-base.a-color-price"),
)

 // Construct data object with scraped information
 const data = {
  url,
  currency: currency || '$',
  image: imageUrl[0],
  title,
  currentPrice: Number(currentPrice) || Number(originalPrice),
  originalPrice: Number(originalPrice) || Number(currentPrice),
  priceHistory: [],
  discountRate: Number(discountRate),
  category: 'category',
  reviewsCount:100,
  stars: 4.5,
  isOutOfStock: outOfStock,

  lowestPrice: Number(currentPrice) || Number(originalPrice),
  highestPrice: Number(originalPrice) || Number(currentPrice),
  averagePrice: Number(currentPrice) || Number(originalPrice),
}


console.log(data)

return data;

} catch (error: any) {
  throw new Error(`Failed to Track Product: ${error.message}`)
}
}