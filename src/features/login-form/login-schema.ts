import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const loginFormSchema = () =>
  yupResolver(
    yup
      .object()
      .shape({
        username: yup.string().required("Required"),
        password: yup.string().required("Required"),
      })
      .required()
  );
