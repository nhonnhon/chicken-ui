import { StatusEnum } from "@/configs/constant.config";

export interface IChickenInformation {
  id?: number;
  name: string;
  description?: string;
  price?: string | number;
  photo1: string;
  photo2?: string;
  photo3?: string;
  ytb_link?: string;
  tiktok_link?: string;
  status?: StatusEnum;
}
