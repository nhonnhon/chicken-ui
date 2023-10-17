import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const chickenFormSchema = () =>
  yupResolver(
    yup
      .object()
      .shape({
        name: yup.string().required("Required"),
        photo1: yup.string().required("Required"),
      })
      .required()
  );
