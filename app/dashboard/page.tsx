//import { db } from "@/db";
import SearchHome from "@/components/SearchHome";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  {
    /* const dbUser = db.user.findFirst({
    where: {
      id: user.id,
    },
  });*/
  }
  if (!user) redirect("/auth-callback?origin=dashboard");

  return <SearchHome />;
};
export default Page;
