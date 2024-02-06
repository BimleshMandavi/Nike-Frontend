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
      console.log("response in orders mocks", response);
      if (response.data.status == "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
}

export const ordersApi = new OrdersApi();
