import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCards from "@/components/ProductCards";
import Searchbar from "@/components/Searchbar";
import { getAllProducts } from "@/mainLib/actions";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    /* Navbar Styling (WidthWrapper) */
    <>
      <MaxWidthWrapper className="mb-4 mt-4 sm:mt-20 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl  font-bold md:text-6xl lg:text-7xl">
          Give Your{" "}
          <span className="text-green-500 border-black ">SHOPPING</span>{" "}
          Super-Powers
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-md ">
          O<span className="text-green-600">Price</span> Allows You To Track The
          Prices of Your Favorite Products and Notifies You When Its Cheap.
          Simply Select a Product and Start Tracking
        </p>

        <Searchbar />
      </MaxWidthWrapper>

      <div>
        <div className="relative-isolate">
          <div
            arial-hidden="true"
            className="pointer-event-none absolute inset-x-0 -top-40 -z-10 transfor-gpu overflow-hidden blur-3xl sm:-top-30"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative up-[calc(90%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[5deg] bg-gradient-to-tr from-[#f3eef0] to-[#d1ecda] opacity-30 sm:[calc(90%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        <div
          arial-hidden="true"
          className="pointer-event-none absolute inset-x-0 -top-40 -z-10 transfor-gpu overflow-hidden blur-3xl sm:-top-30"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff] to-[#9df1ca] opacity-20 sm:[calc(50%-35rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Product Preview Display and All Tracked Searches */}

      <section
        id="trending"
        className="flex flex-col gap-10 px-6 md:px-20 py-24 mx-auto"
      >
        <h2 className="mt-2 -mb-6 mx-auto font-bold text-xl text-gray-900 sm:text-2xl">
          Your Search Result:
          <p className="text-lg font-semibold">
            Click on Image Start To Tracking
          </p>
        </h2>
        <div className="flex text-black mx-auto flex-wrap gap-x-14 gap-y-16 ">
          {allProducts && allProducts.length > 0 && (
            <ProductCards
              key={allProducts[0]._id}
              product={allProducts.slice().reverse()[0]}
            />
          )}
        </div>
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

      <div>
        <div className="relative-isolate">
          <div
            arial-hidden="true"
            className="pointer-event-none absolute inset-x-0 -top-40 -z-10 transfor-gpu overflow-hidden blur-3xl sm:-top-30"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative up-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[5deg] bg-gradient-to-tr from-[#c5e2c2] to-[#d1e1ec] opacity-30 sm:[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
