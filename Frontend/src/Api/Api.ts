import axios from "axios";
const URL: string = "http://localhost:3000";

export const createclientAccount = async (data: any) => {
  try {
    const response = await axios.post(`${URL}/api/user/create-client`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const createadminAccount = async (data: any) => {
  try {
    const response = await axios.post(`${URL}/api/user/create-admin`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const createvendorAccount = async (data: any) => {
  try {
    const response = await axios.post(`${URL}/api/user/create-vendor`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const SigninAccount = async (data: any) => {
  try {
    const response = await axios.post(`${URL}/api/user/sign-in`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const verifyAccount = async (data: {}) => {
  return await axios
    .patch(`${URL}/api/user/verify`, { token: data })
    .then((res) => {
      return res.data;
    });
};
