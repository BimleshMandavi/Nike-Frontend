import axios from "axios";

class CartApi {
  async createCart(data) {
    try {
      const response = await axios.post(
        `http://localhost:5003/userapp/cart/create/`,
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
        `http://localhost:5003/userapp/cart/get/${id}`,

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
      console.log(error);
    }
  }
  async deleteCart(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5003/userapp/cart/soft-delete/${id}`,

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

  async listCart(id) {
    try {
      let data = {
        query: {
          userId: id,
          isDeleted: false,
        },
        options: {
          collation: "",
          sort: { name: 1 },
          populate: "products.productId",
          projection: "",
          lean: false,
          leanWithId: true,
          page: 1,
          limit: 10,
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
        `http://localhost:5003/userapp/cart/list`,
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
}

export const cartApi = new CartApi();
