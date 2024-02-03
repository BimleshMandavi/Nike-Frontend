import "./Products.css";

import ProductSider from "./ProductSider";
import ProductItems from "./ProductItems";
import ProductHeader from "./ProductHeader";

const Products = () => {
  return (
    <div
      className="product-main-container"
      style={{ marginTop: "1rem", position: "fix" }}
    >
      <ProductHeader />
      <div
        className="product-body-cont"
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <ProductSider className="h-full" />
        <ProductItems />
      </div>
    </div>
  );
};

export default Products;
