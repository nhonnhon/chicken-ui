import { useQuery } from "react-query";

import { API_ENDPOINTS } from "../endpoints";
import * as HttpRequest from "../http-request";
import { IChickenResponse } from "./type";

const getChickenDetail = async (id: number): Promise<IChickenResponse> => {
  const url = `${API_ENDPOINTS.CHICKEN}/${id}`;

  const { data } = await HttpRequest.get<IChickenResponse>(url);

  return data;
};

const useGetChickenDetailQuery = (id: number) => {
  return useQuery<IChickenResponse, Error>(
    [`${API_ENDPOINTS.CHICKEN}/${id}`],
    () => getChickenDetail(id),
    {
      enabled: Boolean(id),
    }
  );
};

export { useGetChickenDetailQuery, getChickenDetail };
