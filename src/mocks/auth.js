import axios from "axios";

class AuthApi {
  async getUser() {
    try {
      const response = await axios.get(
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_HOST}/userapp/user/me`,
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
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_HOST}/userapp/auth/register`,
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
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_HOST}/userapp/auth/login`,
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
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_HOST}/userapp/user/update/${id}`,
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
