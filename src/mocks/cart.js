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
