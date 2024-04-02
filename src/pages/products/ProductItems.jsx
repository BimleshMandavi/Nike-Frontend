import { Box, CircularProgress, Pagination, Stack } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/slices/productSlice";

function ProductItems() {
  const dispatch = useDispatch();
  const { product, pagination } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [loading, setLoading] = useState(false);

  //  Get search params
  const [searchParams] = useSearchParams();
  const selecteItem = searchParams.get("type");
  const [searchTexted] = useSearchParams();
  const searchedItem = searchTexted.get("q");
  console.log("Search Q:", searchedItem);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const [filters, setFiltes] = useState({});

  useEffect(() => {
    if (selecteItem) {
      setFiltes({
        ...filters,
        ["title.longTitle"]: { $regex: selecteItem, $options: "i" },
      });
    } else if (searchedItem) {
      setFiltes({
        ...filters,
        ["category"]: { $regex: searchedItem, $options: "i" },
      });
    }
  }, [selecteItem, searchedItem]);

  console.log("filter", filters);

  const handleFetchProducts = async () => {
    try {
      setLoading(true);
      let result = await dispatch(getProduct(page, limit, filters));
      if (result) {
        setLoading(false);
        return true;
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, [page, limit, selecteItem, filters]);

  return (
    <div
      className="product-container max-h-[85vh] overflow-y-hidden sm:overflow-y-scroll pl-0 lg:pl-[34px] "
      style={{ overflowY: "scroll" }}
    >
      <div className="secondery-div flex justify-center  ">
        <Box sx={{ display: "flex" }}>
          <div className="product-cont">
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,

                width: "100%",
              }}
            >
              {loading ? (
                <div className="flex w-full h-[50vh] justify-center items-center">
                  <CircularProgress className="size-10" />
                </div>
              ) : (
                <div>
                  <div className="home-items-cont grid grid-cols-2 lg:grid-cols-3 gap-4 border px-3">
                    {product &&
                      product?.length > 0 &&
                      product.map((item, index) => (
                        <div key={index}>
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
                                MRP : ₹{item?.price?.cost.toFixed(2)}
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                  <div className="w-full text-center pt-4 ">
                    <Stack className="w-full flex justify-center" spacing={8}>
                      <Pagination
                        onChange={handleChangePage}
                        className="flex justify-center w-full"
                        page={page}
                        count={pagination.pageCount}
                        shape="rounded"
                      />
                    </Stack>
                  </div>
                </div>
              )}
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default ProductItems;
