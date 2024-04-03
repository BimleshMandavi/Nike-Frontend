import axios from "axios";

class ProductApi {
  async getProduct(page, limit, filter) {
    let obj = {
      query: {
        $or: [filter ? filter : {}],
      },
      options: {
        collation: "",
        sort: { name: 1 },
        populate: "",
        projection: "",
        lean: false,
        leanWithId: true,
        page: page,
        limit: limit,
        pagination: true,
        useEstimatedCount: false,
        useCustomCountFn: false,
        forceCountFn: false,
        read: {},
        options: {},
        isCountOnly: false,
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:5003/userapp/product/list`,
        obj
      );

      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getSingleProduct(id) {
    try {
      const response = await axios.get(
        `http://localhost:5003/userapp/product/get/${id}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const productApi = new ProductApi();
