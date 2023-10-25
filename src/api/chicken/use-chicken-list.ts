import { useQuery } from "react-query";

import { API_ENDPOINTS } from "../endpoints";
import { QueryParamsType } from "../type";
import * as HttpRequest from "../http-request";
import { IGetAllChickenParam, IGetAllChickenResponse } from "./type";

const getAllChicken = async (
  params: IGetAllChickenParam
): Promise<IGetAllChickenResponse> => {
  const { page = 1, perPage = 10, status } = params as IGetAllChickenParam;

  const url = [`${API_ENDPOINTS.CHICKEN}`];
  url.push(`?page=${page}`);
  url.push(`&perPage=${perPage}`);
  if (status) url.push(`&status=${status}`);

  const { data } = await HttpRequest.get<IGetAllChickenResponse>(url.join(""));

  return data;
};

const useGetAllChickenQuery = (params: IGetAllChickenParam) => {
  return useQuery<IGetAllChickenResponse, Error>(
    [API_ENDPOINTS.CHICKEN, params],
    () => getAllChicken(params)
  );
};

export { useGetAllChickenQuery, getAllChicken };
