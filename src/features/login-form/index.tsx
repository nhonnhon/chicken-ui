import { FormInput } from "@/components";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema } from "./login-schema";
import Button from "@/components/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { ROUTES } from "@/configs/routes.config";
import axios from "axios";

interface ILoginForm {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const { control, handleSubmit, watch } = useForm<ILoginForm>({
    resolver: loginFormSchema(),
  });

  const name = watch("username");
  console.log("🚀 ~ file: index.tsx:25 ~ name:", name);
  const pas = watch("password");
  console.log("🚀 ~ file: index.tsx:27 ~ pas:", pas);

  const onSubmit: SubmitHandler<ILoginForm> = async ({
    username,
    password,
  }) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    // const result = await axios.post(`http://localhost:3900/auth/login`, {
    //   username,
    //   password,
    // });
    if (result) {
      router.replace(ROUTES.DASHBOARD);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <form
        className="bg-white shadow rounded px-8 pt-6 pb-6 mt-4 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <FormInput
            name="username"
            defaultValue={""}
            placeholder="Tên"
            control={control}
            labelText="Nhập tên"
            disabled={isLoading}
          />
        </div>
        <div className="mb-6">
          <FormInput
            name="password"
            defaultValue={""}
            placeholder="*******"
            control={control}
            labelText="Mật khẩu"
            type="password"
            disabled={isLoading}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            variant="contained"
            text="Đăng nhập"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

LoginForm.displayName = "LoginForm";
