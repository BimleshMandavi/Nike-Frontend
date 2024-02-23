import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/productSlice";

function PriceFilletrBox() {
  const [priceRanges, setPriceRanges] = useState({
    under2500: false,
    between2501And7500: false,
    between7501And12999: false,
    over13000: false,
  });

  const handlePriceRangeChange = (event) => {
    const { name, checked } = event.target;
    setPriceRanges((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  console.log("price :", priceRanges);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
     const res = await dispatch(
        getProducts(1, 10, {
          $or: [
            { "price.mrp": { $lt: priceRanges.under2500 ? 2500:""} },
            {
              $or: [
                {
                  "price.mrp": {
                    $gte: priceRanges.between2501And7500 ? 2500 :"",
                    $lte:priceRanges.between2501And7500 ? 7500:"",
                  },
                },
                {
                  "price.mrp": {
                    $gte: priceRanges.between7501And12999 && 7500,
                    $lte: 12999,
                  },
                },
                {
                  "price.mrp": {
                    $gte: priceRanges.over13000 && 12999,
                  },
                },
              ],
            },
          ],
        })
      );
      console.log(res)
    } catch (error) {
      console.error("Error fetching products:", error);
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
              checked={priceRanges.under2500}
              onChange={handlePriceRangeChange}
              name="under2500"
            />
          }
          label="Under ₹ 2500.00"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceRanges.between2501And7500}
              onChange={handlePriceRangeChange}
              name="between2501And7500"
            />
          }
          label="₹ 2501.00 - ₹ 7500.00"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={priceRanges.between7501And12999}
              onChange={handlePriceRangeChange}
              name="between7501And12999"
            />
          }
          label="₹ 7501.00 - ₹ 12999.00"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={priceRanges.over13000}
              onChange={handlePriceRangeChange}
              name="over13000"
            />
          }
          label="Over ₹ 13000.00"
        />
      </FormGroup>
    </>
  );
}

export default PriceFilletrBox;
