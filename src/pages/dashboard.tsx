import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";

import { ROUTES } from "@/configs/routes.config";
import { MainLayout } from "@/layouts/main";

export default function Dashboard() {
  return <div>this is Dashboard page</div>;
}

Dashboard.Layout = MainLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session == null) {
    return {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};
