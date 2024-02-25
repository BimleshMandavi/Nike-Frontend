import axios from "axios";

class AuthApi {
  async getUser() {
    try {
      const response = await axios.get(
        `http://localhost:5003/userapp/user/me`,
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

  async register(data) {
    try {
      const response = await axios.post(
        `http://localhost:5003/userapp/auth/register`,
        data
      );

      if (response.data.status === "SUCCESS") {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login(data) {
    try {
      const response = await axios.post(
        `http://localhost:5003/userapp/auth/login`,
        data
      );

      if (response.data.status === "SUCCESS") {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id, data) {
    try {
      const response = await axios.put(
        `http://localhost:5003/userapp/user/update/${id}`,
        data,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
}

export const authApi = new AuthApi();
