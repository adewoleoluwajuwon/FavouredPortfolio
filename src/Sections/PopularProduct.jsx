import PopularProductCard from "../Components/PopularProductCard";
import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section
      id="products"
      className="mt-17 mx-10 max-w-[1440px] m-auto max-sm:mt-13 px-4 sm:px-8 md:px-16"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-[palanquin] font-bold">
          Our
          <span className="text-[#f73d3e] ml-2">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-[montserrat] text-[#697d91]">
          Experience top notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value{" "}
        </p>
      </div>

      <div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
      sm:gap-4 gap-14"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
