import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const axiosClient = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
axiosClient.interceptors.request.use(
  async (config) => {
    const session = (await getSession()) as unknown as Record<string, unknown>;
    if (session?.jwt) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${session.jwt}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Change response data/error here
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      signOut();
    }

    return Promise.reject(error?.response?.data?.error ?? error);
  }
);

export default axiosClient;
