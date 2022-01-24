/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const callApi = async (
  method: string,
  path: string,
  data?: any,
  params = {}
): Promise<any> => {
  const headers = {
    "Content-Type": "application/json",
  };

  const baseUrl = process.env.REACT_APP_API;
  const fullUrl = `${baseUrl}${path}`;

  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers, params });
  } else if (method === "post" || method === "put") {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {};
