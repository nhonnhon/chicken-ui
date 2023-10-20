import { useMutation } from "react-query";
import * as HttpRequest from "../http-request";
import { API_ENDPOINTS } from "../endpoints";
import { IChickenInformation } from "@/pages/chicken/type";
import { IChickenResponse } from "./type";

export const useUpdateChickenMutation = () => {
  return useMutation((input: IChickenInformation) => {
    const id = input.id;
    delete input.id;

    return HttpRequest.patch<IChickenResponse>(
      `${API_ENDPOINTS.CHICKEN}/${id}`,
      input
    );
  });
};

export const useUpdateChickenStatusMutation = () => {
  return useMutation((input: Partial<IChickenInformation>) => {
    const id = input.id;
    delete input.id;

    return HttpRequest.patch<IChickenResponse>(
      `${API_ENDPOINTS.CHICKEN}/${id}`,
      input
    );
  });
};
