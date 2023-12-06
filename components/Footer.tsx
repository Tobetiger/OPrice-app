import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bottom-0 flex sticky bg-green-100/50 border-gray-600 rounded-lg shadow dark:bg-gray-900 m-4 z-30">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                O<span className="text-green-600 font-bold">Price</span>
              </span>
            </Link>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/emmanuel-alex-1107b21a9/"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </a>
              </li>

              <li>
                <a href="/pricing" className="hover:underline me-4 md:me-6">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/iamtobe_king"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-700 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://www.linkedin.com/in/emmanuel-alex-1107b21a9/"
              className="hover:underline"
            >
              Tobe - OPrice™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
