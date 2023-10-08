import { QueryKey } from "react-query";

export interface ICommonApiPaginationResponse<T> {
  data: T;
  itemCount?: number;
  paginationDto: {
    page: number;
    perPage: number;
  };
}

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
