import { Box, CssBaseline, Pagination, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/slices/productSlice";

function ProductItems() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchProducts = async () => {
    let result = await dispatch(getProducts(page, limit));
    if (result) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  console.log(page);

  return (
    <div
      className="product-container max-h-[90vh] overflow-y-hidden sm:overflow-y-scroll pl-0 sm:pl-[34px] "
      style={{ overflowY: "scroll" }}
    >
      <div className="secondery-div  ">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <div className="product-cont">
            <div className="product-sider"></div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography paragraph>
                <div
                  className="home-items-cont"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  {product &&
                    product?.length > 0 &&
                    product.map((item, index) => (
                      <div key={index} className="pt-5" style={{
                        
                      }}>
                        <Link to={`/pre-cart/${item.id}`}>
                          <div className="product-img ">
                            <img
                              src={item?.image}
                              className="product-img w-[50%]"
                            />
                          </div>
                          <div className="product-details w-[50%]  pt-1">
                            <h3 className="no-underline">
                              {item?.title?.shortTitle}
                            </h3>
                            <div className="product-price ">
                              MRP : ₹{item?.price?.cost}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </Typography>
            </Box>
          </div>
        </Box>
      </div>
      <div className="w-full flex justify-center ">
        <Stack className="w-full flex justify-center" spacing={8}>
          <Pagination
            onChange={handleChangePage}
            className="flex justify-center w-full"
            page={page}
            count={5}
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
}

export default ProductItems;
