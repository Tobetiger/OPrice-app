import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductCards = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className="">
      <div className="product-card_img-container">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        ></Image>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="product-title">{product.title}</h3>
      </div>
    </Link>
  );
};

export default ProductCards;
