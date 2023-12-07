/*"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";

const Page = () => {
  const router = useRouter();
  const retry = useRef(0);
  const maxRetryCount = 5;
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { refetch } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        // user is synced to db
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: (err) => {
      console.log(err);
      if (err.data?.code === "UNAUTHORIZED") {
        retry.current = retry.current + 1;
        if (retry.current <= maxRetryCount) {
          // Retry up to maxRetryCount
          setTimeout(() => {
            refetch();
          }, 500);
        } else {
          router.push("/sign-in");
        }
      }
    },

    retry: false,
    retryDelay: 500,
  });

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">
          Oprice is setting up your account
        </h3>
        <p>You will be redirected, Automatically</p>
      </div>
    </div>
  );
};

export default Page;
*/
