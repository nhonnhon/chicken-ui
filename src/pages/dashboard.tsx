import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import * as React from "react";

import { ROUTES } from "@/configs/routes.config";
import { MainLayout } from "@/layouts/main";
import Button from "@/components/button";
import { useGetAllChickenQuery } from "@/api/chicken/use-chicken-list";

export default function Dashboard() {
  const data = useGetAllChickenQuery({
    page: 1,
    perPage: 10,
  });

  return (
    <div>
      <Button onClick={() => signOut()}>sag</Button>
    </div>
  );
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
