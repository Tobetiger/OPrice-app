import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { ArrowRight, Heart, SearchIcon, UserCircle2Icon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 ">
          <Link href="/" className="flex z-40 font-semibold">
            <p className="text-black font-bold text-xl">
              O<span className="text-green-600 font-bold">Price</span>
            </p>
          </Link>
          <div className=" flex flex-row gap-4 justify-between ">
            <SearchIcon className="mt-2 gap-3 ml-2 mr-2" />
            <Heart className="mt-2 gap-3 ml-2 mr-2" />
            <UserCircle2Icon className=" mt-2 gap-4 mr-2" />
            <div className="hidden items-center space-x-4 sm:flex">
              <Button className="">Sign in</Button>
              <Button className="bg-green-600">
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
