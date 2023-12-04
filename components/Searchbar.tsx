"use client";

import React, { FormEvent, useState } from "react";

import { SearchIcon } from "lucide-react";

import { Button } from "./ui/button";
import { scrapeAndStoreProduct } from "@/mainLib/actions";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    if (!isValidLink) return alert("Please Provide a Valid Amazon Link");
    try {
      setIsLoading(true);
      // Scrap for products
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const isValidAmazonProductUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.endsWith("amazon")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };

  return (
    <form id="searchbar" className="" onSubmit={handleSubmit}>
      <div className="flex mt-8 justify-center bg-gray-50">
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          aria-label="Search bar"
          name="search"
          placeholder="Enter product link..."
          className="px-3 py-2 placeholder-gray-500 text-gray-800 rounded-lg border-none ring-2 ring-gray-600 focus:ring-gray-700 "
        />

        <Button type="submit" className="ml-1">
          {isLoading ? "Searching..." : "Search"}
          <SearchIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default Searchbar;
