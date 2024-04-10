import axios from "axios";

class CartApi {
  async createCart(data) {
    try {
      const response = await axios.post(
        `process.env.REACT_APP_HOST/userapp/cart/create/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("response", response);
      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getCart(id) {
    try {
      const response = await axios.get(
        `process.env.REACT_APP_HOST/userapp/cart/get/${id}`,

        {
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
  async deleteCart(id) {
    try {
      const response = await axios.delete(
        `process.env.REACT_APP_HOST/userapp/cart/delete/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("response in delete cart", response);
      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async listCart(page, limit, id) {
    try {
      let data = {
        query: { userId: id },
        options: {
          collation: "",
          sort: { name: 1 },
          populate: "products.productId",
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
        },
        isCountOnly: false,
      };
      const response = await axios.post(
        `process.env.REACT_APP_HOST/userapp/cart/list`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("response", response);
      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async updateCart(id, data) {
    try {
      // let data = {
      //   query: { id, data },
      //   options: {
      //     collation: "",
      //     sort: { name: 1 },
      //     populate: "products.productId",
      //     projection: "",
      //     lean: false,
      //     leanWithId: true,
      //     pagination: true,
      //     useEstimatedCount: false,
      //     useCustomCountFn: false,
      //     forceCountFn: false,
      //     read: {},
      //     options: {},
      //   },
      //   isCountOnly: false,
      // };
      const response = await axios.put(
        `process.env.REACT_APP_HOST/userapp/cart/update/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("response in get cart", response);
      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
}

export const cartApi = new CartApi();
