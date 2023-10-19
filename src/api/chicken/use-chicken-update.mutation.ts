import { useMutation } from "react-query";
import * as HttpRequest from "../http-request";
import { API_ENDPOINTS } from "../endpoints";
import { IChickenInformation } from "@/pages/chicken/type";
import { IChickenResponse } from "./type";

export const useUpdateChickenMutation = () => {
  return useMutation((input: IChickenInformation) => {
    return HttpRequest.patch<IChickenResponse>(API_ENDPOINTS.CHICKEN, input);
  });
};
