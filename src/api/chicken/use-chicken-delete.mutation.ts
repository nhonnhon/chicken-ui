import { useMutation } from "react-query";
import * as HttpRequest from "../http-request";
import { API_ENDPOINTS } from "../endpoints";

export const useDeleteChickenMutation = () => {
  return useMutation((id: number) => {
    return HttpRequest.destroy<{ message: string }>(
      `${API_ENDPOINTS.CHICKEN}/${id}`
    );
  });
};
