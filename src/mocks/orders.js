import axios from "axios";

class OrdersApi {
  async createOrders(data) {
    try {
      const response = await axios.post(
        `http://localhost:5003/userapp/order/create/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("data in mocks", data);
      console.log("response in orders mocks", response);
      if (response.data.status == "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  async getSingleOrder(id) {
    try {
      const response = await axios.get(
        `http://localhost:5003/userapp/order/get/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("response in get orders", response);
      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async listOrders(page, limit, id) {
    console.log("id", id);
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
        `http://localhost:5003/userapp/order/list`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("response in moks", response);
      if (response.data.status === "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async cencelOrder(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5003/userapp/order/soft-delete/${id}`,
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
      console.log("error", error);
    }
  }
}

export const ordersApi = new OrdersApi();
