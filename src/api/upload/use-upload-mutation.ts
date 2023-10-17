import { API_ENDPOINTS } from "../endpoints";
import * as HttpRequest from "../http-request";
import { useMutation } from "react-query";

interface IS3Media {
  key: string;
}

export const useUploadMutation = () => {
  return useMutation((file: File) => {
    const formData = new FormData();

    formData.append("file", file);

    return HttpRequest.post<IS3Media>(API_ENDPOINTS.FILE, formData, {
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
      },
    });
  });
};
