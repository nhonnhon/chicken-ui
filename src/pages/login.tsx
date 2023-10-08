import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";

import { AuthBox } from "@/components";
import { ROUTES } from "@/configs/routes.config";
import { AuthLayout } from "@/layouts/auth";
import { LoginForm } from "@/features/login-form";

export default function Login() {
  return (
    <AuthBox>
      <LoginForm />
    </AuthBox>
  );
}

Login.Layout = AuthLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: ROUTES.DASHBOARD,
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};
