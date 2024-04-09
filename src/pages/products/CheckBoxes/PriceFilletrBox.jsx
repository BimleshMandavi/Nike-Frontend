import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/slices/productSlice";

function PriceFilletrBox() {
  const [priceRanges, setPriceRanges] = useState({
    A0And2500: false,
    A2501And7500: false,
    A7501And12999: false,
    A13000And100000: false,
  });

  const [query, setQuery] = useState([]);

  const handlePriceRangeChange = (event) => {
    const { name, checked } = event.target;
    setPriceRanges((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    console.log(name.split("And"), checked);
    if (checked) {
      let data = {
        "price.mrp": {
          $lte: Number(name.split("And")[1]), // Less than or equal to
          $gte: Number(name.split("And")[0].split("A")[1]), // Greater than or equal to
        },
      };
      setQuery((prevQuery) => ({
        ...prevQuery,
        [name]: data,
        array: [...(prevQuery.array || []), data],
      }));
    } else {
      // Remove the object from the array
      setQuery((prevQuery) => ({
        ...prevQuery,
        [name]: false,
        array: prevQuery.array.filter((item) => item !== prevQuery[name]),
      }));
    }
  };

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const res = await dispatch(
        getProduct(1, 12, {
          $or: query.array,
        })
      );
      console.log(res);
    } catch (error) {
      console.error("Error :", error);
      return null;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [priceRanges]);
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={priceRanges.A0And2500}
              onChange={handlePriceRangeChange}
              name="A0And2500"
            />
          }
          label="Under ₹ 2500.00"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceRanges.A2501And7500}
              onChange={handlePriceRangeChange}
              name="A2501And7500"
            />
          }
          label="₹ 2501.00 - ₹ 7500.00"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={priceRanges.A7501And12999}
              onChange={handlePriceRangeChange}
              name="A7501And12999"
            />
          }
          label="₹ 7501.00 - ₹ 12999.00"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceRanges.A13000And100000}
              onChange={handlePriceRangeChange}
              name="A13000And100000"
            />
          }
          label="Over ₹ 13000.00"
        />
      </FormGroup>
    </>
  );
}

export default PriceFilletrBox;
