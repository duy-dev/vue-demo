import axios from "axios";
import queryString from "query-string";

export type HttpQuery = {
  [key: string]: unknown;
  filter?: { [key: string]: unknown };
  page?: { size: number; number: number };
  sort?: string;
  includes?: string;
};

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

http.interceptors.request.use(async (config) => {
  // Handle before call API
  return config;
});

http.interceptors.response.use(
  (response) => {
    if (response) {
      return response;
    }
  },
  (error) => {
    throw error;
  }
);

export default http;
