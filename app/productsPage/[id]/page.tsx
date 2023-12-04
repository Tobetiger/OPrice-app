import { getProductById } from "@/mainLib/actions";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

const productsPage = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);

  if (!product) redirect("/");

  return <div>{id}</div>;
};

export default productsPage;
