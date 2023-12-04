import { getProductById } from "@/mainLib/actions";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

const productsPage = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);

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
        </div>
      </div>
    </div>
  );
};

export default productsPage;
