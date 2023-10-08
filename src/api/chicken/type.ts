import { ICommonApiPaginationResponse } from "../type";

export interface IGetAllChickenParam {
  page?: number;
  perPage?: number;
  status?: string;
}

export interface IChickenResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  photo1: string;
  photo2: string;
  photo3: string;
  ytb_link: string;
  tiktok_link: string;
}

export type IGetAllChickenResponse = ICommonApiPaginationResponse<
  IChickenResponse[]
>;
