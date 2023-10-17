import { API_ENDPOINTS } from "../endpoints";
import * as HttpRequest from "../http-request";
import { useMutation } from "react-query";

export const useUploadMutation = () => {
  return useMutation((file: File) => {
    const formData = new FormData();

    formData.append("file", file);

    return HttpRequest.post(API_ENDPOINTS.FILE, formData, {
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
      },
    });
  });
};
