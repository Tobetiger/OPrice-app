import { getProductById } from "@/mainLib/actions";
import { formatNumber } from "@/mainLib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

const productsPage = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(id);

  if (!product) redirect("/");

  return (
    <div className="flex flex-col gap-16 flex-wrap px-6 md:px-20 py-24">
      <div>
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={580}
            height={400}
            className="mx-auto"
          />
          <div className="flex flex-1 flex-col">
            <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
              <div className="flex flex-col gap-3">
                <p className="text-[28px] text-secondary font-semibold">
                  {product.title}
                </p>
                <Link
                  href={product.url}
                  target="_blanck"
                  className=" text-base text-black opacity-50"
                >
                  View Product{/*{store.name}*/}
                </Link>
              </div>

              {/** not nessary features*/}

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#FFF0F0] rounded-10">
                  <Image
                    src="/assets/icons/red-heart.svg"
                    alt="heart"
                    width={20}
                    height={20}
                  />
                  <p className="text-base font-semibold text-[#D46F77]">
                    {product.reviewsCount}
                  </p>
                </div>
                <div>
                  <Image
                    src="/assets/icons/bookmark.svg"
                    alt="bookmark"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/icons/share.svg"
                    alt="share"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-10 py-6 border-y border-y-[#E4E4E4]">
              <div className="flex flex-col gap-2">
                <p className="text-[34px] font-bold text-red-600">
                  {product.currency} {formatNumber(product.currentPrice)}
                </p>
                <p className="text-[21px] font-bold text-black/75 opacity-50 line-through">
                  {product.currency} {formatNumber(product.originalPrice)}
                </p>
              </div>
            </div>
            <div className="my-7 flex flex-col gap-5">
              <div className="flex gap-5 flex-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productsPage;
