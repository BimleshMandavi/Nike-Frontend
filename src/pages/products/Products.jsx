import "./Products.css";

import ProductSider from "./ProductSider";
import ProductItems from "./ProductItems";
import ProductHeader from "./ProductHeader";

const Products = () => {
  return (
    <div
      className="product-main-container overflow-x-hidden"
      style={{ marginTop: "1rem", position: "fix" }}
    >
      <ProductHeader />
      <div
        className="product-body-cont"
        style={{
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div className=" hidden lg:flex lg:h-full lg:w-[20%]">
          <ProductSider />
        </div>
        <div className="h-fll lg:w-[80%] w-full">
          <ProductItems />
        </div>
      </div>
    </div>
  );
};

export default Products;
