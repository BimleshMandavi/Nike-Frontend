import axios from "axios";

class AuthApi {
  async getUser() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/userapp/auth/me`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.status === "SUCCESS") {
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
}

export const authApi = new AuthApi();
