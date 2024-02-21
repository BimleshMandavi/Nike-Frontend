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
      className="product-container max-h-[90vh] overflow-y-hidden sm:overflow-y-scroll pl-0 lg:pl-[34px] "
      style={{ overflowY: "scroll" }}
    >
      <div className="secondery-div  ">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <div className="product-cont">
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography paragraph>
                <div className="home-items-cont grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {product &&
                    product?.length > 0 &&
                    product.map((item, index) => (
                      <div key={index} style={{}}>
                        <Link to={`/pre-cart/${item.id}`}>
                          <div className="product-img w-full h-[70%] pt-5  lg:h-[60%] text-center ">
                            <img
                              src={item?.image}
                              className="product-img h-full w-full text-center"
                            />
                          </div>
                          <div className="product-details no-underline  pt-4">
                            <h3 className=" flex text-sm w-full font-bold no-underline ">
                              {item?.title?.shortTitle}
                            </h3>
                            <h3 className="no-underline flex text-sm w-full text-slate-500 pt-2">
                              {item?.title?.longTitle}
                            </h3>
                            <div className="product-price no-underline text-sm font-bold pt-1 sm:pt-4">
                              MRP : ₹{item?.price?.cost}.00
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
