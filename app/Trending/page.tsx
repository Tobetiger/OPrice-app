import ProductCards from "@/components/ProductCards";
import { getAllProducts } from "@/mainLib/actions";
import React from "react";

const page = async () => {
  const allProducts = await getAllProducts();

  return (
    <div>
      <section className="flex flex-col gap-10 px-6 md:px-20 py-24 mx-auto -mt-12">
        <h2 className="mt-2 -mb-6 font-bold text-2xl text-gray-900 sm:text-2xl">
          All Trending Tracked Products
        </h2>
        <hr className="" />

        <div className="flex text-black flex-wrap gap-x-14 gap-y-16">
          {allProducts?.reverse().map((product) => (
            <ProductCards key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
