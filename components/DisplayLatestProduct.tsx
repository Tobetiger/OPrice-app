import { formatNumber } from "@/mainLib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  latestProduct: Product;
}

const DisplayLatestProduct = ({ latestProduct }: Props) => {
  return (
    <Link
      href={`/productsPage/${latestProduct._id}`}
      className="sm:w-[292px] sm:max-w-[292px] w-full flex-1 flex flex-col gap-4 rounded-md"
    >
      <div className="flex-1 relative flex flex-col gap-5 p-4 rounded-lg bg-gray-50 outline outline-gray-600/50">
        <Image
          src={latestProduct.image}
          alt={latestProduct.title}
          width={200}
          height={200}
          className="max-h-[250px] object-contain w-full h-full bg-transparent"
        ></Image>
      </div>
      <div className="flex flex-col gap-3 ">
        <h3 className="text-lg leading-6 font-semibold truncate">
          {latestProduct.title}
        </h3>
        <div className="flex justify-between">
          <p className="text-[21px] font-bold text-black/75 opacity-50 line-through">
            {latestProduct.currency} {formatNumber(latestProduct.highestPrice)}
          </p>

          <p className="text-red-500 text-lg font-semibold">
            <span>{latestProduct?.currency}</span>
            <span>{latestProduct?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DisplayLatestProduct;
