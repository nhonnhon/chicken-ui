import { useMutation } from "react-query";
import * as HttpRequest from "../http-request";
import { API_ENDPOINTS } from "../endpoints";
import { IChickenInformation } from "@/common/type";
import { IChickenResponse } from "./type";

export const useCreateChickenMutation = () => {
  return useMutation((input: IChickenInformation) => {
    return HttpRequest.post<IChickenResponse>(API_ENDPOINTS.CHICKEN, input);
  });
};
