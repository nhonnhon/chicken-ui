import { AxiosRequestConfig } from "axios";

import axiosClient from "./axios-client";

export async function get<T>(url: string) {
  return axiosClient.get<T>(url);
}

export async function post<T>(
  url: string,
  data: any,
  options?: AxiosRequestConfig
) {
  return axiosClient.post<T>(url, data, options);
}

export async function put<T>(
  url: string,
  data: any,
  options?: AxiosRequestConfig
) {
  return axiosClient.put<T>(url, data, options);
}

export async function patch<T>(
  url: string,
  data: any,
  options?: AxiosRequestConfig
) {
  return axiosClient.patch<T>(url, data, options);
}

export async function destroy<T>(url: string, options?: AxiosRequestConfig) {
  return axiosClient.delete<T>(url, options);
}
